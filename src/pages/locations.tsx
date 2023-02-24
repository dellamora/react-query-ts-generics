/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import CardLocation from "../common/components/cardLocation";
import SearchComponent from "../common/components/search";

const pages: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 ">
      <SearchComponent />
      <CardLocation />
    </div>
  );
};

export default pages;
