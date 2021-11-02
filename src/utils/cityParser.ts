import type { IWeatherData, TCityInfo } from 'models/City'

interface ISearchItemResult {
  name: string
  country: string
  lat: number
  lon: number
}

export const parseSearchItems = (items: ISearchItemResult[]): TCityInfo[] => {
  return items.map(({ name, country, lat, lon }) => ({
    name,
    countryID: country,
    latLong: [lat, lon],
  }))
}

interface IWeatherResponse {
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

export const parseWeather = (data: IWeatherResponse): IWeatherData => {
  const {
    weather,
    main: { temp, pressure, humidity },
    wind: { speed: wind },
  } = data
  const weatherIcons = weather.map(({ icon }) => icon)
  const description = weather.map(({ description }) => description).join(', ')
  const weatherDescription = description.charAt(0).toUpperCase() + description.slice(1)

  return {
    temp,
    humidity,
    pressure,
    wind,
    weatherDescription,
    weatherIcons,
  }
}
