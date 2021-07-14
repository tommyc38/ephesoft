/**
 * A Star Wars Spaceship
 * @property {string} name - The name of this starship. The common name, such as "Death Star".
 * @property {string} model - The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
 * @property {string} starship_class - The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation".
 * @property {string} manufacturer - The manufacturer of this starship. Comma separated if more than one.
 * @property {string} cost_in_credits - The cost of this starship new, in galactic credits.
 * @property {string} length - The length of this starship in meters.
 * @property {string} crew - The number of personnel needed to run or pilot this starship.
 * @property {string} passengers - The number of non-essential people this starship can transport.
 * @property {string} max_atmosphering_speed -The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
 * @property {string} hyperdrive_rating - The class of this starships hyperdrive.
 * @property {string} MGLT - The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight"
 *  is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only
 *  really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance
 *  between our Sun (Sol) and Earth.
 * @property {string} cargo_capacity - The maximum number of kilograms that this starship can transport. consumables
 *  *string The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
 * @property {string} cargo_capacity - The class of this starships hyperdrive.
 * @property {string} films - An array of Film URL Resources that this starship has appeared in.
 * @property {string} pilots - An array of People URL Resources that this starship has been piloted by.
 * @property {string} url - The hypermedia URL of this resource.
 * @property {string} created - The ISO 8601 date format of the time that this resource was created.
 * @property {string} edited - The ISO 8601 date format of the time that this resource was edited.
 */
export interface Spaceship {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  films: string[]
  pilots: string[]
  url: string
  created: string
  edited: string
}
