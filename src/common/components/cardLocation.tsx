/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const CardLocation: React.FC = (): JSX.Element => {
  return (
    <div className="h-28 w-80 p-4 flex flex-col justify-center items-center rounded-md border-2 border-primary bg-secondary">
        <h1 className="font-bold">Location: example</h1>
        <h1 className="text-textGray">EP: 12S3</h1>
    </div>
  );
};

export default CardLocation;