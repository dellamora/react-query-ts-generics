export interface BaseSearchResponse<T> {
  info: Info;
  results: T[];
}
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: LocationCharacter;
  location: LocationCharacter;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface LocationCharacter {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
