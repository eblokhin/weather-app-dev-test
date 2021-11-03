import type { IWeatherData, TCityInfo } from 'models/City'
import type { IAPIResponse } from 'models/api'
import type { IParser } from 'utils/cityParser'

import { parseSearchItems, parseWeather } from 'utils/cityParser'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || ''
const URLS = {
  geo: 'http://api.openweathermap.org/geo/1.0/direct',
  weather: 'http://api.openweathermap.org/data/2.5/weather',
}

async function execute<T = unknown, R = unknown>(request: Promise<Response>, parser?: IParser<T, R>) {
  try {
    const response = await request
    const success = response.ok

    if (success) {
      const responseData = await response.json()
      const data = parser ? parser(responseData) : responseData.json()

      return { success, data }
    }

    return {
      success,
      errorStatus: 'External error',
    }
  } catch (e) {
    console.log(e)
    return {
      success: false,
      errorStatus: 'Internal error',
    }
  }
}

export async function getCityByName(name: string): Promise<IAPIResponse<TCityInfo[]>> {
  const params = new URLSearchParams({ q: name, appid: API_KEY, limit: '10' })
  const request = fetch(`${URLS.geo}?${params.toString()}`, {
    method: 'GET',
  })

  return await execute(request, parseSearchItems)
}

export async function getWeatherByIdOrName(
  args: { id: number } | { name: string; countryId: string },
): Promise<IAPIResponse<IWeatherData | undefined>> {
  const params = new URLSearchParams({ appid: API_KEY, units: 'metric' })

  if ('id' in args) {
    params.append('id', args.id.toString())
  } else {
    params.append('q', `${args.name},,${args.countryId}`)
  }

  const request = fetch(`${URLS.weather}?${params.toString()}`, {
    method: 'GET',
  })

  return await execute(request, parseWeather)
}
