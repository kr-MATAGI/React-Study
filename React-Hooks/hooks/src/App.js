import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [updateTitle]);
  return setTitle;
};

const App = () => {
  const titileUpdater = useTitle("Loading...");
  setTimeout(() => {
    titileUpdater("Home");
  }, 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;