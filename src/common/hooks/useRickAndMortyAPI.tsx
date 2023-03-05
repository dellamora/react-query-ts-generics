/* eslint-disable @typescript-eslint/no-unused-vars */

import { useCallback, useMemo } from "react";
import type { Location, Character, Episode } from "../../domain/interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAPI } from "../utils/fetch";

type Endpoints = {
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
const useRickAndMortyAPI = <T extends keyof Endpoints>(
  endpoint: T,
  filters: Filters[T] = {},
) => {
  const getAPI = useCallback(
    async ({ pageParam = 1 }) => {
      return await fetchAPI({ endpoint, pageParam, filters });
    },
    [endpoint, filters],
  );
  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [
        `apiCall-${endpoint}-${new URLSearchParams(filters).toString()}`,
      ],
      queryFn: getAPI,
      keepPreviousData: true,
      getNextPageParam: lastPage => lastPage.nextCursor,
    });

  return {
    isFetchingNextPage,
    hasNextPage,
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
