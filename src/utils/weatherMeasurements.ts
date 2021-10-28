import { MeasurementType, TMeasurementType } from 'models/MeasurementType'

export const getMeasurementString = (type: TMeasurementType, value: number): string | null => {
  switch (type) {
    case MeasurementType.Humidity:
      return `${value} %`
    case MeasurementType.Pressure:
      return `${value} hPa`
    case MeasurementType.Wind:
      return `${value} m/s`
    default:
      return null
  }
}
