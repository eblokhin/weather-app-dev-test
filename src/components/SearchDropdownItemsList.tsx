import type { FunctionComponent } from 'react'
import type CityAutocomplete from 'store/cityAutocomplete'
import type { TCityInfo } from 'models/City'

import SearchDropdownItem from './SearchDropdownItem'

interface IProps {
  items: CityAutocomplete['items']
  onPick: (item: TCityInfo) => void
}

const SearchDropdownItemsList: FunctionComponent<IProps> = ({ items, onPick }) => (
  <>
    {items.map((item, i) => (
      <SearchDropdownItem key={`${item.name}-${i}`} item={item} onPick={() => onPick(item)} />
    ))}
  </>
)

export default SearchDropdownItemsList
