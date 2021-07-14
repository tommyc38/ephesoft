/**
 * Star Wars Film
 * @property {string} title - The title of this film.
 * @property {number} episode_id - The episode number of this film.
 * @property {string} opening_crawl - The opening paragraphs at the beginning of this film.
 * @property {string} director - The name of the director of this film.
 * @property {string} producer - The name(s) of the producer(s) of this film. Comma separated.
 * @property {string} release_date - The ISO 8601 date format of film release at original creator country.
 * @property {string[]} species - An array of species resource URLs that are in this film.
 * @property {string[]} starships - An array of starship resource URLs that are in this film.
 * @property {string[]} vehicles - An array of vehicle resource URLs that are in this film.
 * @property {string[]} characters - An array of people resource URLs that are in this film.
 * @property {string[]} planets - An array of planet resource URLs that are in this film.
 * @property {string} url - The hypermedia URL of this resource.
 * @property {string} created - The ISO 8601 date format of the time that this resource was created.
 * @property {string} edited - The ISO 8601 date format of the time that this resource was edited.
 */
export interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: Date
  species: string[]
  starships: string[]
  vehicles: string[]
  characters: string[]
  planets: string[]
  url: string[]
  created: string
  edited: string
}
