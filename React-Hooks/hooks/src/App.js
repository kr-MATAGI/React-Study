import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
  });
  console.log(JSON.stringify(data));
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
