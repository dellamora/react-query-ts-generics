/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex justify-between h-50 items-center  py-2 px-8 lg:px-16 ">
      <a href="">
       <Image alt="rick and morty log" src="/logoRAM.png" width={150} height={55} />
      </a>
      <button className="block lg:hidden" onClick={() => setIsOpen(current => !current)}>
        X
      </button>
      {isOpen && 
        <div className=" lg:hidden absolute top-20 left-0 right-0 h-screen w-screen font-semibold text-2xl flex flex-col gap-4 py-4 items-center bg-primary">
          <Link href="/characteres">
           <h1>Characteres </h1>
          </Link>
          <Link href="/locations">
           <h1>Locations</h1>
          </Link>
          <Link href="/epsiodes">
           <h1>Epsiodes</h1>
          </Link>
        </div>
      }
      <div className="hidden lg:flex justify-between gap-4 text-lg font-semibold">
          <Link href="/characteres">
           Characteres
          </Link>
          <Link href="/locations">
           Locations
          </Link>
          <Link href="/epsiodes">
           Epsiodes
          </Link>
      </div>
    </div>
  );
};

export default Nav;