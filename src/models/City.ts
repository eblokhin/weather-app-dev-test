export interface IWeatherData {
  id: number
  temp: number
  humidity: number
  wind: number
  pressure: number
  description: string
  icons: string[]
}

export interface ICity {
  key: string
  name: string
  countryId: string
  latLong: [lat: number, lon: number]
  initialized: boolean
  pending: boolean
  weatherData?: IWeatherData
}

export type TCityInfo = Pick<ICity, 'name' | 'countryId' | 'latLong'>
