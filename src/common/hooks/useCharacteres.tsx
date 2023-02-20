/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import type {  BaseSearchResponse, RickAndMorty } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";


const APILInk = "https://rickandmortyapi.com/api/character/";

const useCharacteres = () => {
  const [page, setPage] = useState(1)
  const [characteres, setCharacteres] = useState<RickAndMorty[]>([])

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
        setCharacteres(current => [...current, ...data.results])
      },
      keepPreviousData: true
  });
  const isLoading = useMemo(() => {
    return baseLoading;
  }, [baseLoading]);

  return {
    isLoading,
    characteres,
    setPage
  }
};

export default useCharacteres;