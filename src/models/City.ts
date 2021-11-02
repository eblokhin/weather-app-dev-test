import { runInAction, makeAutoObservable } from 'mobx'

export interface IWeatherData {
  temp: number
  humidity: number
  wind: number
  pressure: number
  weatherDescription: string
  weatherIcons: string[]
}

export interface ICity extends IWeatherData {
  id?: number
  name: string
  countryID: string
  latLong: [lat: number, lon: number]
  initialized: boolean
}

export type TCityInfo = Pick<ICity, 'name' | 'countryID' | 'latLong'>

class CityAutocomplete {
  items: TCityInfo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async getItems() {
    
  }
}
