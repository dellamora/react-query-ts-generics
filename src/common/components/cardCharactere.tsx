/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Character } from "../../domain/interfaces";
import React from "react";
import Image from "next/image";

type Props = {
  rickandmortyAPI: Pick<Character, "image" | "name" | "species" | "id">[];
};

const CardCharactere = ({ rickandmortyAPI }: Props): JSX.Element => {
  return (
    <div className="grid-cols-charactersCards gap-8 space-y-6 lg:grid lg:w-full lg:p-20">
      {rickandmortyAPI.map(character => {
        return (
          <div
            key={`character-${character.id}`}
            className="overflow-hidden rounded-md border border-secondary bg-secondary shadow-md"
          >
            <div className="relative aspect-video w-80 overflow-hidden lg:w-full  ">
              <Image
                alt="character"
                src={character.image}
                fill
                className="object-cover"
              />
            </div>
            <div className=" h-full w-full p-4">
              <h1 className="font-bold">{character.name}</h1>
              <h1 className="text-textGray">{character.species}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCharactere;
