/**
 * Response
 * @typedef {Object} Response
 * @property {number} count - Number of planets in the database.
 * @property {string} next - The url for the next page of 10 results from the database.
 * @property {string} previous - The url for the previous page of 10 results from the database.
 * @property {Object[]} results - The previous page of 10 results from the database.
 */
export interface Response<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
