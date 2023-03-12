/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";
import React, { useState, useEffect } from "react";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import ContainerGrid from "../common/components/containerGrid";
import { useInView } from "react-intersection-observer";
import { Episode } from "../domain/interfaces";

const pages: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({});
  const [selected, setSeleceted] = useState<Episode | null>(null);

  const {
    data: episodes,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRickAndMortyAPI("episode", { name: search });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (inView) fetchNextPage();
    }, 100);
    return () => clearTimeout(timeOut);
  }, [inView, isFetchingNextPage]);
  console.log(selected);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent onChange={setSearch} />
      <ContainerGrid>
        {episodes.map(episode => {
          return (
            <Card
              key={`episode-${episode.id}`}
              title={episode.name}
              subTitle={episode.air_date}
              append={episode.episode}
            />
          );
        })}
        {!isLoading && !isFetchingNextPage && hasNextPage ? (
          <div ref={ref} className="-mt-60 flex h-10 justify-center " />
        ) : null}
      </ContainerGrid>
    </div>
  );
};

export default pages;
