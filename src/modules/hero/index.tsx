/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";

/* import { Container } from "./styles"; */

const hero: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="relative w-72 h-56">
      <Image src="/portalRAM.png" fill alt="rick and morty title"/>
      </div>
    </div>
  );
};

export default hero;