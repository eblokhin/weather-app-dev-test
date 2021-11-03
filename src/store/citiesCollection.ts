import type { TCityInfo } from 'models/City'

import { action, flow, flowResult, makeObservable, observable } from 'mobx'

import City from './city'
import localStorageClient from 'api/localStorage'

const UPDATE_INTERVAL = parseInt(process.env.REACT_APP_UPDATE_INTERVAL as string) || 60000

export default class CitiesCollection {
  items: Map<string, City>
  intervalID: number
  lastUpdate = 0

  constructor() {
    makeObservable(this, {
      items: observable.shallow,
      addItem: flow.bound,
      removeItem: action.bound,
      fetchItems: flow.bound,
    })

    this.items = new Map()

    const localStorageItems = localStorageClient.getAll()

    if (localStorageItems.length) {
      localStorageItems.forEach((item) => this.addItem(item, false))
      this.fetchItems()
    }

    this.intervalID = window.setInterval(this.fetchItems, UPDATE_INTERVAL)
  }

  *addItem(item: TCityInfo, fetchData = true): Generator<Promise<City>, void, City> {
    const key = `${item.name}-${item.countryId}`

    if (this.items.has(key)) {
      return
    }

    const newCity = new City(item)
    this.items.set(newCity.key, newCity)

    if (fetchData) {
      const city = yield flowResult(newCity.fetch())
      if (!city.initialized) {
        this.removeItem(city)
      } else {
        localStorageClient.setCity(city)
      }
    }
  }

  removeItem(item: City): void {
    this.items.delete(item.key)
    localStorageClient.remove(item)
  }

  *fetchItems(): Generator<Promise<City[]>, void, City[]> {
    if (!this.items.size) {
      return
    }

    const requests: Promise<City>[] = []
    this.items.forEach((item) => {
      requests.push(flowResult(item.fetch()))
    })

    const result: City[] = yield Promise.all(requests)

    result
      .filter((item) => !item.initialized)
      .forEach((item) => {
        this.removeItem(item)
      })

    this.lastUpdate = new Date().valueOf()
  }
}
