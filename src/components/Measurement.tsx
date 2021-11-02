import type { FunctionComponent, ReactElement } from 'react'
import { MeasurementType, TMeasurementType } from 'models/MeasurementType'

import cn from 'classnames'

import * as SvgIcon from 'components/SvgIcon'
import { getMeasurementString } from 'utils/weatherMeasurements'

interface IProps {
  type: TMeasurementType
  value: number
  className?: string
}

const Measurement: FunctionComponent<IProps> = ({ type, value, className }) => {
  let icon: ReactElement | null = null

  switch (type) {
    case MeasurementType.Humidity:
      icon = <SvgIcon.Humidity />
      break
    case MeasurementType.Pressure:
      icon = <SvgIcon.Pressure />
      break
    case MeasurementType.Wind:
      icon = <SvgIcon.Wind />
      break
  }

  const text = getMeasurementString(type, value)

  return (
    <div className={cn('flex items-center', className)}>
      <div className="align-middle w-6 h-6 mr-1">{icon}</div> {text}
    </div>
  )
}

export default Measurement
