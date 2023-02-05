/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const CardLocation: React.FC = (): JSX.Element => {
  const locations = [
    {location: "one", ep: "232"},
    {location: "two", ep: "223"},
  ]
  return (
    <div className="h-28 w-80 p-4 flex flex-col justify-center items-center rounded-md border-2 border-primary bg-secondary">
       {locations.map(location => {
        return (
          <>
            <h1 className="font-bold">Location: {location.location}</h1>
            <h1 className="text-textGray">EP: {location.ep}</h1>
          </>
        )
       })}
       
    </div>
  );
};

export default CardLocation;