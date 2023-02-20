/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import SearchComponent from "../common/components/search";
import CardCharactere from "../common/components/cardCharactere";

/* import { Container } from "./styles"; */

const characters: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative h-60 w-72">
        <Image
          src="/portalRAM.png"
          fill
          alt="rick and morty title"
          className="aspect-square"
        />
      </div>
      <SearchComponent />
      <CardCharactere />
    </div>
  );
};

export default characters;
