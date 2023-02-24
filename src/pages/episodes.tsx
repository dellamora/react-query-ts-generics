/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";
import React, { useState } from "react";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

const pages: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const {
    data: episodes,
    isLoading,
    fetchNextPage,
  } = useRickAndMortyAPI("episode", { name: search });
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent onChange={setSearch} />
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
    </div>
  );
};

export default pages;
