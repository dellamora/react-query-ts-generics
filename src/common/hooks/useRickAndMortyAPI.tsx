/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import type {
  BaseSearchResponse,
  Location,
  Character,
  Episode,
} from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";

type Endpoints = {
  location: Location;
  character: Character;
  episode: Episode;
};
const useRickAndMortyAPI = <T extends keyof Endpoints>(endpoint: T) => {
  const APILInk = "https://rickandmortyapi.com/api/";
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Endpoints[T][]>([]);
  // pq aqui é uma lista
  const { isLoading: baseLoading } = useQuery<BaseSearchResponse<Endpoints[T]>>(
    // e aqui n
    {
      queryKey: ["apiCall", endpoint, page],
      queryFn: () =>
        fetch(`${APILInk}/${endpoint}?page=${page}`).then(res => res.json()),
      onSuccess(data) {
        setData(current => [
          ...current,
          ...data.results.filter(d => {
            return !current.map(c => c.id).includes(d.id);
          }),
        ]);
      },
      keepPreviousData: true,
    },
  );
  const isLoading = useMemo(() => {
    return baseLoading;
  }, [baseLoading]);

  return {
    isLoading,
    setPage,
    data,
  };
};

export default useRickAndMortyAPI;
