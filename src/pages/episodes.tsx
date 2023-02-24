/* eslint-disable @typescript-eslint/no-unused-vars */
import SearchComponent from "../common/components/search";

import React from "react";

/* import { Container } from "./styles"; */

const pages: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent />
    </div>
  );
};

export default pages;
