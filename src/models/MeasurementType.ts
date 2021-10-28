export const MeasurementType = {
  Pressure: 'pressure',
  Wind: 'wind',
  Humidity: 'humidity',
} as const

export type TMeasurementType = typeof MeasurementType[keyof typeof MeasurementType]
