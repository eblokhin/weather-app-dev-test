import type { FunctionComponent } from 'react'

import Header from 'components/Header'
import CityItem from 'components/CityItem'
import Spinner from 'components/Spinner'
import TCity from 'models/City'

const App: FunctionComponent = () => {
  const tempCity: TCity = {
    name: 'London',
    initialized: true,
    temp: 2,
    humidity: 70,
    wind: 3.4,
    pressure: 1012,
    description: 'light intensity drizzle',
    weatherIcon: '09d',
  }

  return (
    <div className="container max-w-5xl mx-auto">
      <Header />
      <CityItem city={tempCity} />
      <Spinner />
    </div>
  )
}

export default App
