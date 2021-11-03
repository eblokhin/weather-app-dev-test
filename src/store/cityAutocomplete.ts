import type { TCityInfo } from 'models/City'

import { runInAction, makeAutoObservable } from 'mobx'
import { getCityByName } from 'api/openWeatherApi'

export default class CityAutocomplete {
  items: TCityInfo[] = []
  term?: string
  pending = false
  error = ''

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true, deep: false })
  }

  getItems = async (q: string): Promise<void> => {
    runInAction(() => {
      this.term = q
      this.error = ''
      this.pending = true
      this.items = []
    })

    const { data, success } = await getCityByName(q)

    runInAction(() => {
      if (success && data) {
        this.items = data
      } else {
        this.error = 'Failed to get cities list'
      }
      this.pending = false
    })
  }
}
