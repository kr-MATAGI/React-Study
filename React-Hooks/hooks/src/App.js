import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const input = useRef();
  console.log(input.current);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default App;
