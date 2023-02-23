import { useState, useMemo } from "react";
import Grid from "../modules/hero/grid";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

//passar o loadig pro c=grid pra caso ele estiver carregando desabilatar o caralho la do buton
// filter pra caso de pp personagem favorito ai remove
// IOAPI sempre button de loading more estiver visivel dar fetch
export default function Home() {
  const {
    data: characters,
    isLoading,
    fetchNextPage,
  } = useRickAndMortyAPI("character");

  return (
    <div>
      <Grid
        rickandmortyAPI={characters}
        onLoadMore={() => {
          if (isLoading) return;
          fetchNextPage();
        }}
      />
    </div>
  );
}
