import { ICity } from 'models/City'

const tempCity: ICity = {
  id: 1,
  name: 'London',
  countryID: 'GB',
  initialized: true,
  temp: 2,
  humidity: 70,
  wind: 3.4,
  pressure: 1012,
  weatherDescription: 'Light intensity drizzle',
  weatherIcons: ['09d', '50d'],
  latLong: [55.7617, 37.6067],
}

export default tempCity
