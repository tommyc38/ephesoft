/**
 * A Planet
 * @typedef {Object} Planet
 * @property {string} name - The name of this planet.
 * @property {string} diameter - The diameter of this planet in kilometers.
 * @property {string} rotation_period - The number of standard hours it takes for this planet to complete a single
 * rotation on its axis
 * @property {string} orbital_period - The number of standard days it takes for this planet to complete a single
 * orbit of its local star.
 * @property {string} gravity - // A number denoting the gravity of this planet, where "1" is normal or 1 standard G.
 * "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
 * @property {string} population - The average population of sentient beings inhabiting this planet.
 * @property {string} climate - The climate of this planet. Comma separated if diverse.
 * @property {string} terrain - The terrain of this planet. Comma separated if diverse.
 * @property {string} surface_water - The percentage of the planet surface that is naturally occurring water or bodies of water.
 * @property {string[]} residents - An array of People URL Resources that live on this planet.
 * @property {string[]} films - An array of Film URL Resources that this planet has appeared in.
 * @property {string} url - The hypermedia URL of this resource.
 * @property {string} created - The ISO 8601 date format of the time that this resource was created.
 * @property {string} edited - The ISO 8601 date format of the time that this resource was edited.
 * */
export interface Planet {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: string[]
  films: string[]
  url: string
  created: string
  edited: string
}

/**
 * Planet Response
 * @typedef {Object} Planet Response
 * @property {number} count - Number of planets in the database.
 * @property {string} next - The next page of 10 results from the database.
 * @property {string} previous - The previous page of 10 results from the database.
 */
export interface PlanetResponse {
  count: number
  next: string
  previous: string
  results: Planet[]
}
