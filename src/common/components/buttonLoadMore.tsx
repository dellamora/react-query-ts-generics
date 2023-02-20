/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
type Props = {
  onClick: () => void;
};
const ButtonLoadMore = ({ onClick }: Props): JSX.Element => {
  return (
    <button
      className="w-32 rounded-lg border-primary bg-secondary p-2 uppercase text-TextWhite hover:bg-secondary/80 hover:text-textGray/80"
      onClick={onClick}
    >
      Load More
    </button>
  );
};

export default ButtonLoadMore;
