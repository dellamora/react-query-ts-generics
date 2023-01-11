/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import { motion } from "framer-motion";

const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex justify-between h-50 items-center  py-2 px-8 lg:px-16 ">
      <a href="/home">
       <Image alt="rick and morty log" src="/typoRAM.png" width={150} height={55} />
      </a>
      <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="lg:hidden space-x-5 z-10 bg-transparent flex "
        >
          <MenuToggleIcon
            className="stroke-primaryDark "
            onClick={() => setIsOpen(current => !current)}
          />
        </motion.div>
      {isOpen && 
        <div className=" lg:hidden z-50 absolute top-16 left-0 right-0 h-screen w-screen font-semibold text-2xl flex flex-col gap-6 py-5 items-center bg-primary">
          <Link href="/characteres" onClick={() => setIsOpen(current => !current)}>
           <h1 >Characteres </h1>
          </Link>
          <Link href="/locations" onClick={() => setIsOpen(current => !current)}>
           <h1>Locations</h1>
          </Link>
          <Link href="/episodes" onClick={() => setIsOpen(current => !current)}>
           <h1>Episodes</h1>
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
          <Link href="/episodes">
          Episodes
          </Link>
      </div>
    </div>
  );
};

export default Nav;