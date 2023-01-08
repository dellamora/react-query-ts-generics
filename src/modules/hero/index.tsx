/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";

/* import { Container } from "./styles"; */

const hero: React.FC = (): JSX.Element => {
  return (
    <div>
      <Image src="/rick-and-morty-logo.png" alt="logo" width={300} height={300}/>
    </div>
  );
};

export default hero;