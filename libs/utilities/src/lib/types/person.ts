
/**
 A Star Wars Person
 @typedef {Object} Person
 @property {string} name - The name of this person.
 @property {string} birth_year - The birth year of the person, using the in-universe standard of BBY or ABY - Before
   the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars
   episode IV: A New Hope.
 @property {string} eye_color - The eye color of this person. Will be "unknown" if not known or "n/a" if the person does
   not have an eye.
 @property {string} gender - The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does
   not have a gender.
 @property {string} hair_color - The hair color of this person. Will be "unknown" if not known or "n/a" if the person
   does not have hair.
 @property {string} height - The height of the person in centimeters.
 @property {string} mass - The mass of the person in kilograms.
 @property {string} skin_color - The skin color of this person.
 @property {string} homeworld - The URL of a planet resource, a planet that this person was born on or inhabits.
 @property {string[]} films - An array of film resource URLs that this person has been in.
 @property {string[]} species - An array of species resource URLs that this person belongs to.
 @property {string[]} starships - An array of starship resource URLs that this person has piloted.
 @property {string[]} vehicles - An array of vehicle resource URLs that this person has piloted.
 @property {string} url - The hypermedia URL of this resource.
 @property {string} created - The ISO 8601 date format of the time that this resource was created.
 @property {string} edited - The ISO 8601 date format of the time that this resource was edited.
 */
export interface Person {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: string[]
  species: string[]
  starships: string[]
  vehicles: string[]
  url: string
  created: string
  edited: string
}
