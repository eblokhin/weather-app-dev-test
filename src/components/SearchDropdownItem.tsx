import type { FunctionComponent, MouseEventHandler } from 'react'
import type { TCityInfo } from 'models/City'

import { Add } from 'components/SvgIcon'
import styles from './SearchDropdownItem.module.sass'

interface IProps {
  item: TCityInfo
  onPick: () => void
}

const SearchDropdownItem: FunctionComponent<IProps> = ({ item, onPick }) => {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation()
    onPick()
  }

  return (
    <a className={styles.item} onClick={onClick}>
      <div className="font-bold">
        {item.name}, {item.countryId}
      </div>
      <div className="text-sm text-gray-400">{item.latLong.join(', ')}</div>
      <div className={styles.addIcon}>
        <Add />
      </div>
    </a>
  )
}

export default SearchDropdownItem
