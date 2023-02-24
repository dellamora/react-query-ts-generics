/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

const CardLocationandEpisodes: React.FC = (): JSX.Element => {
  const locations = [
    { location: "one", ep: "232" },
    { location: "two", ep: "223" },
  ];
  return (
    <>
      {locations.map(location => {
        return (
          <>
            <div className="flex h-28 w-80 flex-col items-center justify-center rounded-md border-2 border-primary bg-secondary p-4">
              <h1 className="font-bold">Location: {location.location}</h1>
              <h1 className="text-textGray">EP: {location.ep}</h1>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardLocationandEpisodes;
