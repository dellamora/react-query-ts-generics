/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ArrowBack from "../../svgs/arrow-back";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: Props): JSX.Element => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return <></>;
  }

  return createPortal(
    <>
      {isOpen && (
        <div className="isent-0 absolute z-50 h-screen w-full bg-primary p-4">
          <ArrowBack
            onClick={() => {
              onClose();
            }}
          />
          <div className="flex flex-col items-center">
            <div className="h-28 w-28  rounded-full bg-primaryRed"></div>
            <h1 className="text-2xl text-TextWhite">Nome do personagem</h1>
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
      )}
    </>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal-root")!,
  );
};

export default Modal;
