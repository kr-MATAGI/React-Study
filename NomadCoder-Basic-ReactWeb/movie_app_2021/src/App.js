import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Details from "./routes/Details";
import Navigation from './components/Navigation';


function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Details}/>
  </BrowserRouter>
  );
}

export default App;