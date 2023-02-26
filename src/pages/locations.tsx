/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import Card from "../common/components/Card";
import SearchComponent from "../common/components/search";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import ContainerGrid from "../common/components/containerGrid";
import { useInView } from "react-intersection-observer";

const pages: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const { ref, inView } = useInView({});
  const {
    data: locations,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = useRickAndMortyAPI("location", { name: search });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (inView) fetchNextPage();
    }, 100);
    return () => clearTimeout(timeOut);
  }, [inView, isFetchingNextPage]);
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
        {!isLoading && !isFetchingNextPage && hasNextPage ? (
          <div ref={ref} className="-mt-60 flex h-10 justify-center " />
        ) : null}
      </ContainerGrid>
    </div>
  );
};

export default pages;
