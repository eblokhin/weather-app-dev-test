import type { IAPIResponse } from 'models/api'
import type { IWeatherData, ICity, TCityInfo } from 'models/City'

import { flow, makeObservable, observable } from 'mobx'

import { getWeatherByIdOrName } from 'api/openWeatherApi'

export default class City implements ICity {
  name = ''
  countryId = ''
  latLong: [lat: number, lon: number] = [0, 0]
  initialized = false // indicates that item was successfully initialized
  pending = false
  error = false
  weatherData?: IWeatherData

  constructor(city: TCityInfo) {
    makeObservable(this, {
      initialized: observable,
      pending: observable,
      weatherData: observable.shallow,
      fetch: flow.bound,
    })

    this.name = city.name
    this.countryId = city.countryId
    this.latLong = city.latLong
  }

  get key(): string {
    return `${this.name}-${this.countryId}`
  }

  *fetch(): Generator<Promise<IAPIResponse<IWeatherData | undefined>>, City, IAPIResponse<IWeatherData>> {
    this.pending = true
    this.error = false

    const apiArgs = this.weatherData
      ? {
          id: this.weatherData.id,
        }
      : {
          name: this.name,
          countryId: this.countryId,
        }

    const result: IAPIResponse<IWeatherData> = yield getWeatherByIdOrName(apiArgs)

    this.pending = false

    if (result.success && result.data) {
      this.initialized = true
      this.weatherData = result.data
    } else {
      this.error = true
    }

    return this
  }
}
