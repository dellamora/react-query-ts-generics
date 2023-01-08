/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";

const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex justify-between h-10 items-center px-8 lg:px-16 ">
      <Image alt="rick and morty log" src="/logoRAM.png" width={35} height={35}/>
      <button className="block lg:hidden" onClick={() => setIsOpen(current => !current)}>
        X
      </button>
      {isOpen && 
        <div className="block lg:hidden absolute top-10 left-0 right-0 bg-white h-[90vh] font-semibold text-2xl flex flex-col gap-4 items-center ">
          <h1 className=" mt-10">Characteres</h1>
          <h1>Locations</h1>
          <h1>Epsiodes</h1>
        </div>
      }
      <div className="hidden lg:flex justify-between gap-4 text-lg font-semibold">
      <h1>Characteres</h1>
      <h1>Locations</h1>
      <h1>Epsiodes</h1>
      </div>
    </div>
  );
};

export default Nav;