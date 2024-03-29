/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-primary  p-4  md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-grayM  edium text-sm   sm:text-center ">
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
      <ul className="mt-3 flex flex-wrap items-center text-sm   sm:mt-0">
        <li>
          <a
            target="_blank"
            href="https://www.dellamora.dev/"
            className="mr-4 hover:underline md:mr-6"
            rel="noreferrer"
          >
            My website
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
