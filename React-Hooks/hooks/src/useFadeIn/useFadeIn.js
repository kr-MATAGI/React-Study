import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;

  const element = useRef();
  if(!element) return;
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = "opacity ${duration}s ease-in-out ${delay}s";
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;