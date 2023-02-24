/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import SearchComponent from "../common/components/search";
import CardCharactere from "../common/components/cardCharactere";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

/* import { Container } from "./styles"; */

const characters: React.FC = (): JSX.Element => {
  const { data: characters, isLoading } = useRickAndMortyAPI("character");

  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent />
      <CardCharactere rickandmortyAPI={characters} />
    </div>
  );
};

export default characters;
