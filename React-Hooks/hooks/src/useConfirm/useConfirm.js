import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useConfirm = (msg, confirmCallback, abortedCallback) => {
  if (!confirmCallback && typeof confirmCallback !== "function") return;
  if (!abortedCallback && typeof abortedCallback !== "function") return;

  const confirmAction = () => {
    if (confirm(msg)) {
      confirmCallback();
    } else {
      abortedCallback();
    }
  };

  return confirmAction;
};

export default useConfirm;