import type { FunctionComponent } from 'react'
import type { TMeasurementType } from 'models/MeasurementType'

import cn from 'classnames'

import MeasurementIcon from 'components/MeasurementIcon'
import { getMeasurementString } from 'utils/weatherMeasurements'

interface IProps {
  type: TMeasurementType
  value: number
  className?: string
}

const Measurement: FunctionComponent<IProps> = ({ type, value, className }) => {
  const icon = <MeasurementIcon type={type} />
  const text = getMeasurementString(type, value)

  return (
    <div className={cn('flex items-center', className)}>
      <div className="align-middle w-6 h-6 mr-1">{icon}</div> {text}
    </div>
  )
}

export default Measurement
