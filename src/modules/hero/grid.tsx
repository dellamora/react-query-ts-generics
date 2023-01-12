/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import SearchComponent from "../../common/components/search";
import { motion } from "framer-motion";
import ButtonLoadMore from "../../common/components/buttonLoadMore";

const cards = [
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },

    {
    name: "DellaFlix ",
  },
    {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },
  {
    name: "DellaFlix ",
  },

];

const Grid: React.FC = (): JSX.Element => {
  return (
   <>
   <motion.div
      id="grid"
      className="p-10 h-fit"
    >
      <div className="grid grid-cols-cards gap-10">
        {cards.map((card, i) => {
          return (
            <div
              className="rounded-lg overflow-hidden h-20 w-20 bg-TextWhite"
              key={`card-${i}`}
            >
              oi
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