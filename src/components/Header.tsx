import type { FunctionComponent } from 'react'

import logo from 'assets/logo.svg'
import styles from './Header.module.css'

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <div className={styles.line} />
    <img className={styles.logo} src={logo} alt="Weather app logo" />
    <div className={styles.line} />
  </header>
)

export default Header
