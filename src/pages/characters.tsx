/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import SearchComponent from "../common/components/search";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import ContainerGrid from "../common/components/containerGrid";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const characters: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const { ref, inView } = useInView({});

  const {
    data: characters,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useRickAndMortyAPI("character", {
    name: search,
  });

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
        {characters.map(character => {
          return (
            <div
              key={`character-${character.id}`}
              className=" w-fit overflow-hidden rounded-md border border-secondary bg-secondary shadow-md md:w-full"
            >
              <div className="relative aspect-video w-80 overflow-hidden md:w-full">
                <Image
                  alt="character"
                  src={character.image}
                  fill
                  className=" object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <h1 className="font-bold">{character.name}</h1>
                <h1 className="text-textGray">{character.species}</h1>
              </div>
            </div>
          );
        })}
        {!isLoading && !isFetchingNextPage && hasNextPage ? (
          <div ref={ref} className="-mt-60 flex h-10 justify-center " />
        ) : null}
      </ContainerGrid>
    </div>
  );
};

export default characters;
