import type { FunctionComponent, ReactFragment, ReactElement } from 'react'

import cn from 'classnames'

import Dropdown from 'components/Dropdown'
import Spinner from './Spinner'
import { TCityInfo } from 'models/City'

import styles from 'components/SearchDropdown.module.sass'
import SearchDropdownItem from './SearchDropdownItem'

interface IProps {
  isOpen?: boolean
  items?: TCityInfo[]
  loading?: boolean
  searchTerm?: string
  addItem: (item: TCityInfo) => void
}

const SearchDropdown: FunctionComponent<IProps> = ({ isOpen, loading, items, searchTerm, addItem }) => {
  let content: ReactFragment | ReactElement | null = null
  const classNames = []
  if (!isOpen) {
    content = null
  } else if (loading) {
    classNames.push(styles.dropdownText)
    content = <Spinner />
  } else if (items && !items.length && searchTerm) {
    classNames.push(styles.dropdownText)
    content = (
      <>
        <div className="text-center">
          <b>City called “{searchTerm}” was not found</b>
          <br />
          <span className="text-gray-400 text-sm">Try different city name</span>
        </div>
      </>
    )
  } else if (items && items.length) {
    content = items.map((item) => <SearchDropdownItem item={item} addItem={addItem} />)
  }

  return (
    <Dropdown className={cn(classNames)} isOpen={isOpen}>
      {content}
    </Dropdown>
  )
}

export default SearchDropdown
