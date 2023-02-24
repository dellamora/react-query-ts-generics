/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import SearchComponent from "../common/components/search";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";
import ContainerGrid from "../common/components/containerGrid";
import Image from "next/image";

const characters: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const { data: characters, isLoading } = useRickAndMortyAPI("character", {
    name: search,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent onChange={setSearch} />
      <ContainerGrid>
        {characters.map(character => {
          return (
            <button
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
            </button>
          );
        })}
        {/* <Modal /> */}
      </ContainerGrid>
    </div>
  );
};

export default characters;
