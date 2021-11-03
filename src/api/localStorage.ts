import type { TCityInfo } from 'models/City'
import type City from 'store/city'

const keyPrefix = 'city'

const getKey = (city: City) => `${keyPrefix}:${city.key}`

const localStorageClient = {
  setCity(city: City): void {
    const { name, countryId, latLong } = city
    const value = JSON.stringify({ name, countryId, latLong })
    localStorage.setItem(getKey(city), value)
  },

  getAll(): TCityInfo[] {
    return Object.keys(localStorage)
      .filter((key) => key.startsWith(`${keyPrefix}:`))
      .map((key) => {
        const dataString = localStorage.getItem(key)
        if (dataString) {
          return JSON.parse(dataString)
        }
      })
      .filter((value) => !!value)
  },

  remove(city: City): void {
    localStorage.removeItem(getKey(city))
  },
}

export default localStorageClient
