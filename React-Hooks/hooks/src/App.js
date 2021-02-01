import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
  const [state, setState] = useState(navigator.online);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.online);
    }
    setState(navigator.online);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return state;
};

const App = () => {
  const handleNetworkChage = online => {
    console.log(online ? "online" : "offline");
  };
  var online = useNetwork(handleNetworkChage);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
