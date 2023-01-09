/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex justify-between h-50 items-center  py-2 px-8 lg:px-16 ">
      <a href="">
       <Image alt="rick and morty log" src="/logoRAM.png" width={180} height={55} />
      </a>
      <button className="block lg:hidden" onClick={() => setIsOpen(current => !current)}>
        X
      </button>
      {isOpen && 
        <div className="block lg:hidden absolute top-10 left-0 right-0 bg-white h-[90vh] font-semibold text-2xl flex-col gap-4 items-center ">
          <Link href="/characteres">
           Characteres
          </Link>
          <a href="/locations">
           <h1>Locations</h1>
          </a>
          <a href="/epsiodes">
           <h1>Epsiodes</h1>
          </a>
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