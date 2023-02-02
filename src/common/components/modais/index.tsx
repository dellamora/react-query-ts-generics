/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowBack from "../../svgs/arrow-back";
/* import { Container } from "./styles"; */

const Modal = (): JSX.Element => {
    const [mount, setMount] = useState(false);
    useEffect(() => {
      setMount(true);
    }, []);
    if (!mount) {
      return <></>;
    }
  
    return createPortal(
        <>
       <div className="absolute isent-0 z-50 bg-primary w-full h-screen p-4">
        <ArrowBack/>
        <div className="flex flex-col items-center">
            <div className="rounded-full bg-primaryRed  h-28 w-28"></div>
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
    </>,
     document.getElementById("modal-root"),
  );
};

export default Modal;