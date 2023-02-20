/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuToggleIcon from "../../common/svgs/menuToggle";
import { motion } from "framer-motion";

const Nav: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-50 relative flex items-center justify-between  py-2 px-8 lg:px-16 ">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image
          alt="rick and morty log"
          src="/typoRAM.png"
          width={150}
          height={55}
        />
      </Link>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="bg-transparent z-10 flex space-x-5 lg:hidden "
      >
        <MenuToggleIcon
          className="stroke-primaryDark "
          onClick={() => setIsOpen(current => !current)}
        />
      </motion.div>
      {isOpen && (
        <div className=" absolute top-16 left-0 right-0 z-50 flex h-screen w-screen flex-col items-center gap-6 bg-primary py-5 text-2xl font-semibold lg:hidden">
          <Link
            href="/characters"
            onClick={() => setIsOpen(current => !current)}
          >
            <h1>characters </h1>
          </Link>
          <Link
            href="/locations"
            onClick={() => setIsOpen(current => !current)}
          >
            <h1>Locations</h1>
          </Link>
          <Link href="/episodes" onClick={() => setIsOpen(current => !current)}>
            <h1>Episodes</h1>
          </Link>
        </div>
      )}
      <div className="hidden justify-between gap-4 text-lg font-semibold lg:flex">
        <Link href="/characters">characters</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/episodes">Episodes</Link>
      </div>
    </div>
  );
};

export default Nav;
