import cn from 'classnames'
import type { FunctionComponent, HTMLProps } from 'react'

import './WeatherIcon.sass'

type TProps = {
  icon: string
} & HTMLProps<HTMLDivElement>

const WeatherIcon: FunctionComponent<TProps> = ({ icon, className }) => {
  return <div className={cn('inline-block align-middle w-6 h-6', className, `icon-${icon}`)} />
}

export default WeatherIcon
