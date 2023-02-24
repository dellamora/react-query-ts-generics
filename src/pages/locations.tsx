/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import ContainerGrid from "../common/components/containerGrid";

const pages: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const {
    data: locations,
    fetchNextPage,
    isLoading,
  } = useRickAndMortyAPI("location", { name: search });
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent onChange={setSearch} />

      <ContainerGrid>
        {locations.map(location => {
          return (
            <Card
              key={`location-${location.id}`}
              title={location.name}
              subTitle={location.dimension}
            />
          );
        })}
      </ContainerGrid>
    </div>
  );
};

export default pages;
