import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (!onBefore && typeof onBefore !== "function") return;
  const handle = (event) => {
    const { clientY } = event;
    if (0 >= clientY) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default useBeforeLeave;