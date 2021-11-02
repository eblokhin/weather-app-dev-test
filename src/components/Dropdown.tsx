import type { FunctionComponent, HTMLProps } from 'react'
import cn from 'classnames'

import styles from './Dropdown.module.sass'

interface IProps extends HTMLProps<HTMLElement> {
  isOpen?: boolean
}

const Dropdown: FunctionComponent<IProps> = ({ className, children, isOpen }) => {
  return (
    <div className={styles.base}>
      <div className={cn(className, styles.dropdown, { [styles.dropdownOpen]: isOpen })}>{children}</div>
    </div>
  )
}

export default Dropdown
