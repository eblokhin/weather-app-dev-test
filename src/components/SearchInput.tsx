import { ChangeEvent, FunctionComponent, useCallback } from 'react'

import { useState } from 'react'
import cn from 'classnames'

import styles from './SearchInput.module.sass'
import SearchDropdown from './SearchDropdown'
import { TCityInfo } from 'models/City'

interface IProps {
  className?: string
}

const SearchInput: FunctionComponent<IProps> = ({ className }) => {
  // TODO: probably excessive
  const [, setValue] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    e.target.value = value.trim()
  }

  const addItem = useCallback(() => {
    // do nothing
  }, [])

  const tempItems: TCityInfo[] = [
    {
      name: 'London',
      countryID: 'GB',
      latLong: [12.1235, -35.516124],
    },
    {
      name: 'Birmingham',
      countryID: 'GB',
      latLong: [12.1235, -35.516124],
    },
    {
      name: 'Bristol',
      countryID: 'GB',
      latLong: [12.1235, -35.516124],
    },
  ]

  return (
    <form className={cn(styles.form, className)}>
      <input
        autoComplete="off"
        className={styles.input}
        type="text"
        name="query"
        onChange={onInputChange}
        placeholder="Search"
      />
      <button className={styles.button} type="submit">
        <span className="sr-only">Search</span>
      </button>
      <SearchDropdown isOpen={false} loading={false} items={tempItems} searchTerm="London" addItem={addItem} />
    </form>
  )
}

export default SearchInput
