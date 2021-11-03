import type { VFC } from 'react'
import type CitiesCollection from 'store/citiesCollection'

import cn from 'classnames'

import CityItem from './CityItem'
import { observer } from 'mobx-react-lite'

interface IProps {
  itemsStore: CitiesCollection
  className?: string
}

const CityList: VFC<IProps> = ({ itemsStore, className }) => {
  const { items } = itemsStore

  if (!items.size) {
    return (
      <div className="col-span-full h-40 flex items-center text-center justify-center text-2xl">
        Pick some city using search to track weather in it
      </div>
    )
  }

  return (
    <>
      {Array.from(items.values(), (city) => (
        <CityItem className={cn(className)} city={city} key={`${city.key}`} />
      ))}
    </>
  )
}

export default observer(CityList)
