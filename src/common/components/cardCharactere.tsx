/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

const CardCharactere: React.FC = (): JSX.Element => {
  return (
    <div className="h-72 w-80 overflow-hidden rounded-md border-2 border-primary bg-secondary">
      <div className="aspect-video bg-primaryRed"> imagem aqui</div>
      <div className=" h-full w-full p-4">
        <h1 className="font-bold">nome do pp</h1>
        <h1 className="text-textGray">especie</h1>
      </div>
    </div>
  );
};

export default CardCharactere;
