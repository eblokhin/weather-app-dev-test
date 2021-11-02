import type { VFC } from 'react'
import type { ICity } from 'models/City'

import cn from 'classnames'

import CityItem from './CityItem'

interface IProps {
  items: ICity[]
  className?: string
}

const CityList: VFC<IProps> = ({ items, className }) => {
  if (!items.length) {
    return (
      <div className="col-span-full h-40 flex items-center text-center justify-center text-2xl">
        Pick some city using search to track weather in it
      </div>
    )
  }

  return (
    <>
      {items.map((city) => (
        <CityItem className={cn(className)} city={city} key={`${city.name}, ${city.countryID}`} />
      ))}
    </>
  )
}

export default CityList
