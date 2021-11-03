// cloned from https://mui.com/components/progress/
import type { FunctionComponent } from 'react'

import cn from 'classnames'

import styles from './Spinner.module.sass'

const Spinner: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <svg className={styles.spinner} viewBox="22 22 44 44">
        <circle className={styles.spinnerBack} cx="44" cy="44" r="20" fill="none" strokeWidth="3.6" />
        <circle className={styles.spinnerFront} cx="44" cy="44" r="20" fill="none" strokeWidth="3.6" />
      </svg>
    </div>
  )
}

export default Spinner
