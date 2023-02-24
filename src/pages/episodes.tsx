/* eslint-disable @typescript-eslint/no-unused-vars */
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";

import React from "react";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

const pages: React.FC = (): JSX.Element => {
  const {
    data: episodes,
    isLoading,
    fetchNextPage,
  } = useRickAndMortyAPI("episode");
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent />
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
