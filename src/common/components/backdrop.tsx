/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

const Backdrop: React.FC<{ onClose: () => void }> = ({
  onClose,
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        onClose();
      }}
      id="backdrop"
      className="absolute w-full h-full bg-black/60 "
    />
  );
};

export default Backdrop;
