/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const ButtonLoadMore: React.FC = (): JSX.Element => {
  return (
    <button className="text-TextWhite w-32 rounded-lg p-2 bg-secondary uppercase border-primary hover:bg-secondary/80 hover:text-textGray/80">
        Load More
    </button>
  );
};

export default ButtonLoadMore;