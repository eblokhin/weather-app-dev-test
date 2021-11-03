import type { IWeatherData, TCityInfo } from 'models/City'

export interface IParser<T = unknown, R = unknown> {
  (data: T): R
}

interface ISearchReponseItem {
  name: string
  country: string
  lat: number
  lon: number
}

export const parseSearchItems: IParser<ISearchReponseItem[], TCityInfo[]> = (items) => {
  return items.map(({ name, country, lat, lon }) => ({
    name,
    countryId: country,
    latLong: [lat, lon],
  }))
}

interface IWeatherResponse {
  id: number
  weather: Array<{
    description: string
    icon: string
  }>
  main: {
    temp: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
  }
}

export const parseWeather: IParser<IWeatherResponse, IWeatherData> = (data) => {
  const {
    id,
    weather,
    main: { temp, pressure, humidity },
    wind: { speed: wind },
  } = data
  const icons = weather.map(({ icon }) => icon)
  const descriptionRaw = weather.map(({ description }) => description).join(', ')
  const description = descriptionRaw.charAt(0).toUpperCase() + descriptionRaw.slice(1)

  return {
    id,
    temp,
    humidity,
    pressure,
    wind,
    description,
    icons,
  }
}
