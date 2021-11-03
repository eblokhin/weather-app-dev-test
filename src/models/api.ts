export interface IAPIResponse<T> {
  success: boolean
  data?: T
  errorStatus?: string
}
