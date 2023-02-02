/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Modal = (): JSX.Element => {

  return (
    <div className="absolute isent-0 z-50 bg-primary w-full h-screen p-10">
        <div>go back</div>
        <div className="flex flex-col items-center">
            <div className="rounded-full bg-primaryRed h-32 w-32"></div>
            <h1 className="text-TextWhite text-2xl">Nome do personagem</h1>
        </div>
        <div>
            <h1>Informations</h1>
            <div>
            <h1>more info here</h1>

            </div>
        </div>
        <div>
            <h1>Episodes</h1>
            <div>
                <h1>dinfos </h1>
            </div>
        </div>
    </div>
  );
};

export default Modal;