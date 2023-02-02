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
        <div className="bg-primaryRed w-28 h-28">oi</div>
    </>,
     document.getElementById("modal-root"),
  );
};

export default Modal;