/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import SearchComponent from "../../common/components/search";
import { motion } from "framer-motion";
import ButtonLoadMore from "../../common/components/buttonLoadMore";
import type { RickAndMorty } from "../../domain/interfaces";

type Props = {
  rickanmortyAPI: Pick<
   RickAndMorty,
   "image"
  >[];
};


const Grid = ({rickanmortyAPI}: Props): JSX.Element => {
  return (
   <>
   <motion.div
      id="grid"
      className="p-10 h-fit"
    >
      <div className="grid grid-cols-cards gap-10">
        {rickanmortyAPI.map((character, i) => {
          return (
            <div
              className="relative rounded-lg overflow-hidden h-20 w-20 bg-TextWhite"
              key={`card-${i}`}
            >
              <Image alt="pp" src={character.image} fill/>
            </div>
          );
        })}
      </div>

    </motion.div>
    <div className="flex justify-center">

    <ButtonLoadMore />
    </div>
    </>
 
  );
};

export default Grid;