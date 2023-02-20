/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import type {  BaseSearchResponse, RickAndMorty } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";


const APILInk = "https://rickandmortyapi.com/api/character/";

const useCharacters = () => {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState<RickAndMorty[]>([])

  const {
    isLoading: baseLoading,
    error,
    data,
    refetch,
  } = useQuery<BaseSearchResponse<RickAndMorty[]> >({
    queryKey: ["repoData", page],
    queryFn: () =>
    fetch(`${APILInk}?page=${page}`).then(res =>
        res.json(),
      ),
      onSuccess(data) {
        setCharacters(current => [...current, ...data.results])
      },
      keepPreviousData: true
  });
  const isLoading = useMemo(() => {
    return baseLoading;
  }, [baseLoading]);

  return {
    isLoading,
    characters,
    setPage
  }
};

export default useCharacters;