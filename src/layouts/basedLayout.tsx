// import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Nav from "../modules/nav";
import Footer from "../modules/footer";
const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     container: containerRef,
//   });
  return (
    <div className="h-screen w-screen overflow-y-hidden">
      <div id="modal-root" />
      <div
        className="h-screen flex flex-col bg-primary overflow-auto "
        ref={containerRef}
      >
        <Nav/>
        <div >{children}</div>
        <Footer/>
      </div>
    </div>
  );
};

export default BaseLayout;
