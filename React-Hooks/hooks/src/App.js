import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};

export default App;