import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) return;

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") new Notification(title, options);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

const App = () => {
  const tirggerNotif = useNotification("Say Hello !", { body: "Matagi" });
  return (
    <div className="App">
      <button onClick={tirggerNotif}>Hello</button>
    </div>
  );
};

export default App;
