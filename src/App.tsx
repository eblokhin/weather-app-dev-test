import type { FunctionComponent } from 'react'

import Header from 'components/Header'
import SearchInput from 'components/SearchInput'
import CityList from 'components/CityList'

import styles from './App.module.sass'

import city from 'fixtures/city'

const App: FunctionComponent = () => {
  return (
    <div className="container max-w-5xl mx-auto">
      <Header />
      <div className={styles.layout}>
        <div className={styles.intro}>
          <h1>Weather forecast</h1>
          <p>Simple but powerful weather forcasting service based on OpenWeatherMap API</p>
        </div>
        <SearchInput className={styles.search} />
        <CityList items={[city, city]} />
      </div>
    </div>
  )
}

export default App
