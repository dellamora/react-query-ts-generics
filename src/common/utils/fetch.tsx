import { Character, Episode, Location } from "../../domain/interfaces";

const APILInk = "https://rickandmortyapi.com/api/";

export type Endpoints = {
  location: Location;
  character: Character;
  episode: Episode;
};

type Filters = {
  location: { name?: string; type?: string; dimension?: string };
  character: {
    name?: string;
    status?: "alive" | "dead" | "unknown";
    species?: string;
    type?: string;
    gender?: "female" | "male" | "genderless" | "unknown";
  };
  episode: { name?: string; episode?: string };
};

export const fetchAPI = async <T extends keyof Endpoints>({
  pageParam = 1,
  endpoint,
  filters = {},
}: {
  pageParam: number;
  endpoint: T;
  filters?: Filters[T];
}) => {
  const queryObj = { page: pageParam.toString(), ...filters };
  const query = new URLSearchParams(queryObj);
  const response =
    (
      await fetch(`${APILInk}/${endpoint}?${query.toString()}`).then(res =>
        res.json(),
      )
    )?.results || ([] as Endpoints[T][]);
  return {
    data: response,
    nextCursor: pageParam + 1,
  };
};
