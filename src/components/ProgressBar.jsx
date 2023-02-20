import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setTimeout(() => {
        setFile(null);
      }, 1000);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="h-3 bg-orange-700 mt-2 rounded-sm"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.8 }}
    ></motion.div>
  );
};

export default ProgressBar;
