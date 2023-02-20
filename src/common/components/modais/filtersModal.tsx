/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
      <div className="h-28 w-28 bg-primaryRed">oi</div>
    </>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
