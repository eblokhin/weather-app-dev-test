import type { FunctionComponent } from 'react'
import type { ICity } from 'models/City'

import cn from 'classnames'

import WeatherIcon from 'components/WeatherIcon'
import Measurement from 'components/Measurement'
import { MeasurementType } from 'models/MeasurementType'

import styles from './CityItem.module.sass'

interface IProps {
  city: ICity
  className?: string
}

const CityItem: FunctionComponent<IProps> = ({ city, className }) => {
  const { name, pressure, weatherIcons: weatherIcon, temp, humidity, wind, weatherDescription, initialized } = city

  return (
    <section className={cn(styles.block, className)}>
      <div className={styles.infoSection}>
        <h2 className={styles.title}>{name}</h2>
        {initialized && (
          <>
            <div className="flex items-center mb-1">
              <div className="text-5xl mr-4">{temp}&deg;C</div>
              {weatherIcon.map((icon) => (
                <WeatherIcon key={icon} icon={icon} className={styles.weatherStatusIcon} />
              ))}
            </div>
            <div className="text-sm text-gray-400 mb-2 capitalize">{weatherDescription}</div>
          </>
        )}
      </div>
      <div className={cn(styles.infoSection, styles.measurements)}>
        <Measurement className={styles.measurementItem} type={MeasurementType.Wind} value={wind} />
        <Measurement className={styles.measurementItem} type={MeasurementType.Humidity} value={humidity} />
        <Measurement className={styles.measurementItem} type={MeasurementType.Pressure} value={pressure} />
      </div>
      <button className={styles.removeButton} title="Remove city">
        <span className="sr-only">Remove city</span>
      </button>
    </section>
  )
}

export default CityItem
