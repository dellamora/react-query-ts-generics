/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import SearchComponent from "../common/components/search";
import CardCharactere from "../common/components/cardCharactere";
import useRickAndMortyAPI from "../common/hooks/useRickAndMortyAPI";

const characters: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const { data: characters, isLoading } = useRickAndMortyAPI("character", {
    name: search,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent onChange={setSearch} />
      <CardCharactere rickandmortyAPI={characters} />
    </div>
  );
};

export default characters;
