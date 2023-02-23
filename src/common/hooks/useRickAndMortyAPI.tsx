/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback } from "react";
import type { Location, Character, Episode } from "../../domain/interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";

type Endpoints = {
  location: Location;
  character: Character;
  episode: Episode;
};
const useRickAndMortyAPI = <T extends keyof Endpoints>(endpoint: T) => {
  const getAPI = useCallback(
    async ({ pageParam = 1 }) => {
      const APILInk = "https://rickandmortyapi.com/api/";
      const response =
        (
          await fetch(`${APILInk}/${endpoint}?page=${pageParam}`).then(res =>
            res.json(),
          )
        )?.results || ([] as Endpoints[T][]);
      return {
        data: response,
        nextCursor: pageParam + 1,
      };
    },
    [endpoint],
  );

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["apiCall"],
    queryFn: getAPI,
    keepPreviousData: true,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });

  return {
    isLoading,
    data: !data
      ? []
      : data.pages.reduce((acc, curr) => {
          return [...acc, ...curr.data];
        }, [] as Endpoints[T][]),
    fetchNextPage,
  };
};

export default useRickAndMortyAPI;
