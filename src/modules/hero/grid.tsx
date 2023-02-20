/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import Image from "next/image";
import SearchComponent from "../../common/components/search";
import { motion } from "framer-motion";
import ButtonLoadMore from "../../common/components/buttonLoadMore";
import type { Character } from "../../domain/interfaces";

type Props = {
  rickandmortyAPI: Pick<Character, "image">[];
  onLoadMore: () => void;
};

const Grid = ({ rickandmortyAPI, onLoadMore }: Props): JSX.Element => {
  return (
    <>
      <motion.div id="grid" className="h-fit p-10">
        <div className="grid grid-cols-cards gap-10">
          {rickandmortyAPI.map((character, i) => {
            return (
              <div
                className="relative h-20 w-20 overflow-hidden rounded-lg bg-TextWhite"
                key={`card-${i}`}
              >
                <Image alt="pp" src={character.image} fill />
              </div>
            );
          })}
        </div>
      </motion.div>
      <div className="flex justify-center">
        <ButtonLoadMore onClick={onLoadMore} />
      </div>
    </>
  );
};

export default Grid;
