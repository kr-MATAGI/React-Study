import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2"
  }
];

const useTabs = (initTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIdx, setCurrIndex] = useState(initTab);

  return {
    currItem: allTabs[currentIdx],
    changeItem: setCurrIndex
  };
};

const App = () => {
  const { currItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currItem.content}</div>
    </div>
  );
};

export default App;
