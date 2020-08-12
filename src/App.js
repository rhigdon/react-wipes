import anime from 'animejs/lib/anime.es.js';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {SplitHorizontal} from './views/SplitHorizontal';
import {Diagonal} from './views/Diagonal';
import {Horizontal} from './views/Horizontal';
import {ScaleUp} from './views/ScaleUp';
import {StarWipe} from './views/StarWipe';
import {Vertical} from './views/Vertical';
import {SplitVertical} from './views/SplitVertical';
import {Bounce} from './views/Bounce';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/diagonal">
            <Diagonal />
          </Route>
          <Route path="/vertical">
              <Vertical />
          </Route>
          <Route path="/split-vertical">
              <SplitVertical />
          </Route>
          <Route path="/horizontal">
              <Horizontal />
          </Route>
          <Route path="/horizontal-reverse">
            <Horizontal direction='reverse' />
          </Route>
          <Route path="/split-horizontal">
              <SplitHorizontal />
          </Route>
          <Route path="/scale-up">
              <ScaleUp />
          </Route>
          <Route path="/star-wipe">
              <StarWipe />
          </Route>
          <Route path="/bounce">
            <Bounce />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div className="App-header">
      <Link className="App-link" to="/vertical">Vertical</Link>
      <Link className="App-link" to="/split-vertical">Split Vertical</Link>
      <Link className="App-link" to="/diagonal">Diagonal</Link>
      <Link className="App-link" to="/diagonal">Split Diagonal</Link>
      <Link className="App-link" to="/horizontal">Horizontal</Link>
      <Link className="App-link" to="/horizontal-reverse">Horizontal Reverse</Link>
      <Link className="App-link" to="/scale-up">Scale Up</Link>
      <Link className="App-link" to="/star-wipe">Star Wipe</Link>
      <Link className="App-link" to="/split-horizontal">Split Horizontal</Link>
      <Link className="App-link" to="/bounce">Bounce</Link>
      {/**
        <Link className="App-link" to="/next">Matrix</Link>
        <Link className="App-link" to="/next">Heart</Link>
        <Link className="App-link" to="/next">Clock Wipe</Link>
      */}
    </div>
  )
}




export default App;
