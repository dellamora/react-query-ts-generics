/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";


const Footer: React.FC = (): JSX.Element => {
  return (
        <footer className="bg-primary  p-4  md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm  sm:text-center text-grayM   edium ">
        © 2023
        <a
          href="https://dellamora.dev"
          target="_blank"
          className="m-1 hover:underline"
          rel="noreferrer"
        >
          - Dellamora
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm   sm:mt-0">
        <li>
          <a
            target="_blank"
            href="https://www.buymeacoffee.com/dellamora"
            className="mr-4 hover:underline md:mr-6"
            rel="noreferrer"
          >
            Wubba lubba dub duuubb!
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://discord.gg/Xxu2raVxs5"
            className="mr-4 hover:underline md:mr-6 "
            rel="noreferrer"
          >
            Discord Server
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="mailto:francielle@dellamora.dev"
            className="hover:underline"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;