/**
 * A Star Wars Vehicle
 * @property {string} name - The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
 * @property {string} model - The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
 * @property {string} vehicle_class - The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
 * @property {string} manufacturer - The manufacturer of this vehicle. Comma separated if more than one.
 * @property {string} length - The length of this vehicle in meters.
 * @property {string} cost_in_credits - The cost of this vehicle new, in Galactic Credits.
 * @property {string} crew - The number of personnel needed to run or pilot this vehicle.
 * @property {string} passengers - The number of non-essential people this vehicle can transport.
 * @property {string} max_atmosphering_speed - The maximum speed of this vehicle in the atmosphere.
 * @property {string} cargo_capacity - The maximum number of kilograms that this vehicle can transport. consumables
 *  *string The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
 * @property {string[]} films - An array of Film URL Resources that this vehicle has appeared in.
 * @property {string[]} pilots - An array of People URL Resources that this vehicle has been piloted by.
 * @property {string[]} url - The hypermedia URL of this resource.
 * @property {string} created - The ISO 8601 date format of the time that this resource was created.
 * @property {string} edited - The ISO 8601 date format of the time that this resource was edited.
 */
export interface Vehicle {
  name: string
  model: string
  vehicle_class: string
  manufacturer: string
  length: string
  cost_in_credits: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  cargo_capacity: string
  films: string[]
  pilots: string[]
  url: string
  created: string
  edited: string

}
