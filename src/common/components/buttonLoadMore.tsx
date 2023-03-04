/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

type Props = {
  onClick: () => void;
};
const ButtonLoadMore = ({ onClick }: Props): JSX.Element => {
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) onClick();
  }, [inView]);

  return (
    <div ref={ref} className="w-32 uppercase text-TextWhite">
      Loading More
    </div>
  );
};

export default ButtonLoadMore;
