/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import type { BaseSearchResponse, RickAndMorty } from "../../domain/interfaces";
import { useQuery } from "@tanstack/react-query";

const APILInk = "https://rickandmortyapi.com/api/location/";

const useEpisodes = () => {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState<RickAndMorty[]>([]);

  const { isLoading: baseLoading } = useQuery<
    BaseSearchResponse<RickAndMorty[]>
  >({
    queryKey: ["repoData", page],
    queryFn: () => fetch(`${APILInk}?page=${page}`).then(res => res.json()),
    onSuccess(data) {
      setEpisodes(current => [...current, ...data.results]);
    },
    keepPreviousData: true,
  });
  const isLoading = useMemo(() => {
    return baseLoading;
  }, [baseLoading]);

  return {
    isLoading,
    episodes,
    setPage,
  };
};

export default useEpisodes;
