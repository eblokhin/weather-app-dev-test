import { ICity } from 'models/City'

const tempCity: ICity = {
  key: 'London-GB',
  name: 'London',
  countryId: 'GB',
  initialized: true,
  pending: false,
  latLong: [55.7617, 37.6067],
  weatherData: {
    id: 1,
    temp: 2,
    humidity: 70,
    wind: 3.4,
    pressure: 1012,
    description: 'Light intensity drizzle',
    icons: ['09d', '50d'],
  },
}

export default tempCity
