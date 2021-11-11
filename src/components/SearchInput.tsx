import type { TCityInfo } from 'models/City'
import { FormEvent, FunctionComponent } from 'react'

import { useCallback, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import cn from 'classnames'

import styles from './SearchInput.module.sass'
import SearchDropdown from './SearchDropdown'
import CityAutocomplete from 'store/cityAutocomplete'
import useWindowEvent from 'hooks/useWindowEvent'

interface IProps {
  className?: string
  store: CityAutocomplete
  addItem: (item: TCityInfo) => void
}

const SearchInput: FunctionComponent<IProps> = ({ className, store, addItem }) => {
  const { getItems } = store

  const formRef = useRef<HTMLFormElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const onClickFocus = useCallback(
    (e) => {
      if (formRef.current && e.target instanceof Node && !formRef.current.contains(e.target)) {
        if (isOpen) setIsOpen(false)
      }
    },
    [isOpen],
  )

  useWindowEvent('click', onClickFocus)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const term = new FormData(e.target as HTMLFormElement).get('term')?.toString().trim()
    if (!term || term.length <= 3) {
      return
    }

    setIsOpen(true)
    getItems(term)
  }

  const onPick = useCallback(
    (item: TCityInfo) => {
      setIsOpen(false)

      if (formRef.current) {
        const input = formRef.current.querySelector('input[name="term"]') as HTMLInputElement

        if (input) {
          input.value = ''
        }
      }

      addItem(item)
    },
    [addItem],
  )

  return (
    <form className={cn(styles.form, className)} onSubmit={onSubmit} ref={formRef}>
      <div className={styles.inputGroup}>
        <input autoComplete="off" className={styles.input} type="text" name="term" placeholder="Search" />
        <button className={styles.button} type="submit">
          <span className="sr-only">Search</span>
        </button>
      </div>
      <SearchDropdown isOpen={isOpen} autoCompleteStore={store} onPick={onPick} />
    </form>
  )
}

export default observer(SearchInput)
