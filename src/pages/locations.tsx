/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import CardLocation from "../common/components/cardLocation";

const pages: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <CardLocation />
    </div>
  );
};

export default pages;
