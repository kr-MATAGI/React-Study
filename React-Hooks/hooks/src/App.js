import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useConfirm = (msg, confirmCallback, abortedCallback) => {
  if (confirmCallback && typeof confirmCallback !== "function") return;
  if (abortedCallback && typeof abortedCallback !== "function") return;

  const confirmAction = () => {
    if (confirm(msg)) {
      confirmCallback();
    } else {
      abortedCallback();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => {
    console.log("Deleting the world...");
  };
  const abort = () => {
    console.log("Aborted");
  };
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delet the world</button>
    </div>
  );
};

export default App;
