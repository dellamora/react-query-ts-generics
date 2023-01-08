/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Nav: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between h-10 items-center px-16">
      <h1 className="text-2xl font-bold">Dellamora</h1>
      <div className="flex justify-between gap-4 text-lg">
      <h1>Home</h1>
      <h1>Characteres</h1>
      <h1>Locations</h1>
      <h1>Epsiodes</h1>
      </div>
    </div>
  );
};

export default Nav;