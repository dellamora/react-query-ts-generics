import { type NextPage } from "next";
import { useState, useEffect, useMemo } from "react";
import Grid from "../modules/hero/grid";
import type {  BaseSearchResponse, RickAndMorty } from "../domain/interfaces";
import { useQuery } from "@tanstack/react-query";


const APILInk = "https://rickandmortyapi.com/api/character/";

//passar o loadig pro c=grid pra caso ele estiver carregando desabilatar o caralho la do buton
// filter pra caso de pp personagem favorito ai remove
// IOAPI sempre button de loading more estiver visivel dar fetch
export default function Home() {
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
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";
console.log({data})
  
  return (
 <div>
  <Grid 
    rickanmortyAPI={characteres} 
    onLoadMore={() => {
     setPage(current => current + 1)
    }} 

  />
 </div>
  );
}


