import React from "react";
import Nav from "../modules/nav";

const BaseLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="h-screen w-screen overflow-y-hidden">
      <div id="modal-root" />
      <div className="flex h-screen flex-col overflow-auto bg-primary ">
        <Nav />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BaseLayout;
