/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

const pages: React.FC = (): JSX.Element => {
  const {
    data: locations,
    fetchNextPage,
    isLoading,
  } = useRickAndMortyAPI("location");
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent />
      {locations.map(location => {
        return (
          <Card
            key={`location-${location.id}`}
            title={location.name}
            subTitle={location.dimension}
          />
        );
      })}
    </div>
  );
};

export default pages;
