import type { FunctionComponent } from 'react'
import type { TCityInfo } from 'models/City'

import { Add } from 'components/SvgIcon'
import styles from './SearchDropdownItem.module.sass'

interface IProps {
  item: TCityInfo
  addItem: (item: TCityInfo) => void
}

const SearchDropdownItem: FunctionComponent<IProps> = ({ item, addItem }) => {
  return (
    <a className={styles.item} onClick={() => addItem(item)}>
      <div className="font-bold">
        {item.name}, {item.countryID}
      </div>
      <div className="text-sm text-gray-400">{item.latLong.join(', ')}</div>
      <div className={styles.addIcon} onClick={() => addItem(item)}>
        <Add />
      </div>
    </a>
  )
}

export default SearchDropdownItem
