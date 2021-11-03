import { FunctionComponent, ReactFragment, ReactElement, useCallback } from 'react'
import type CityAutocomplete from 'store/cityAutocomplete'
import type { TCityInfo } from 'models/City'

import cn from 'classnames'
import { observer } from 'mobx-react-lite'

import Dropdown from 'components/Dropdown'
import Spinner from './Spinner'

import styles from 'components/SearchDropdown.module.sass'
import SearchDropdownItemsList from './SearchDropdownItemsList'

interface IProps {
  isOpen?: boolean
  onPick: (item: TCityInfo) => void
  autoCompleteStore: CityAutocomplete
}

const SearchDropdown: FunctionComponent<IProps> = function SearchDropdown({ isOpen, autoCompleteStore, onPick }) {
  let content: ReactFragment | ReactElement | null = null
  const { pending, items, term: searchTerm } = autoCompleteStore
  const classNames = []

  const onPickCb = useCallback(
    (item: TCityInfo) => {
      onPick(item)
    },
    [onPick],
  )

  if (!isOpen) {
    content = null
  } else if (pending) {
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
    content = <SearchDropdownItemsList items={items} onPick={onPickCb} />
  }

  return (
    <Dropdown className={cn(classNames)} isOpen={isOpen}>
      {content}
    </Dropdown>
  )
}

export default observer(SearchDropdown)
