import type { FunctionComponent } from 'react'
import type City from 'store/city'

import cn from 'classnames'

import WeatherIcon from 'components/WeatherIcon'
import Measurement from 'components/Measurement'
import { MeasurementType } from 'models/MeasurementType'
import Spinner from 'components/Spinner'

import styles from './CityItem.module.sass'
import { observer } from 'mobx-react-lite'
import { citiesCollection } from 'store'

interface IProps {
  city: City
  className?: string
}

const CityItem: FunctionComponent<IProps> = ({ city, className }) => {
  const { name, initialized, pending, weatherData } = city

  const removeItem = citiesCollection.removeItem

  return (
    <section className={cn(styles.block, className)}>
      <div className={styles.infoSection}>
        <h2 className={styles.title}>{name}</h2>
        {initialized && weatherData && (
          <>
            <div className="flex items-center mb-1">
              <div className="text-5xl mr-4">{weatherData.temp}&deg;C</div>
              {weatherData.icons.map((icon) => (
                <WeatherIcon key={icon} icon={icon} className={styles.weatherStatusIcon} />
              ))}
            </div>
            <div className="text-sm text-gray-400 mb-2 capitalize">{weatherData.description}</div>
          </>
        )}
        {!initialized && pending && (
          <div className="h-16 relative">
            <Spinner className={styles.spinner} />
          </div>
        )}
      </div>
      <div className={cn(styles.infoSection, styles.measurements)}>
        <Measurement className={styles.measurementItem} type={MeasurementType.Wind} value={weatherData?.wind} />
        <Measurement className={styles.measurementItem} type={MeasurementType.Humidity} value={weatherData?.humidity} />
        <Measurement className={styles.measurementItem} type={MeasurementType.Pressure} value={weatherData?.pressure} />
      </div>
      <button className={styles.removeButton} title={`Remove ${city.name}`} onClick={() => removeItem(city)}>
        <span className="sr-only">Remove {city.name}</span>
      </button>
    </section>
  )
}

export default observer(CityItem)
