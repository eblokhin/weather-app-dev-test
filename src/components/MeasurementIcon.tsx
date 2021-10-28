import type { TMeasurementType } from 'models/MeasurementType'
import type { FunctionComponent } from 'react'

import { MeasurementType } from 'models/MeasurementType'

import { ReactComponent as Humidity } from 'assets/svg-icons/Humidity.svg'
import { ReactComponent as Pressure } from 'assets/svg-icons/Pressure.svg'
import { ReactComponent as Wind } from 'assets/svg-icons/Wind.svg'

const PropertyIcon: FunctionComponent<{ type: TMeasurementType }> = ({ type }) => {
  switch (type) {
    case MeasurementType.Pressure:
      return <Pressure />

    case MeasurementType.Humidity:
      return <Humidity />

    case MeasurementType.Wind:
      return <Wind />

    default:
      return null
  }
}

export default PropertyIcon
