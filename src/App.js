import Typography from '@material-ui/core/Typography'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {
  BounceWipe,
  DiagonalWipe,
  HorizontalWipe,
  ScaleWipe,
  SplitHorizontalWipe,
  SplitVerticalWipe,
  StarWipe,
  VerticalWipe,
} from './lib'

function App() {
  return (
    <Router forceRefresh={true}>
        <Switch>
          <Route path="/diagonal">
            <DiagonalWipe>
              <Home />
            </DiagonalWipe>
          </Route>
          <Route path="/vertical">
              <VerticalWipe>
                <Home />
              </VerticalWipe>
          </Route>
          <Route path="/split-vertical">
              <SplitVerticalWipe>
                <Home />
              </SplitVerticalWipe>
          </Route>
          <Route path="/horizontal">
              <HorizontalWipe>
                <Home />
              </HorizontalWipe>
          </Route>
          <Route path="/horizontal-reverse">
            <HorizontalWipe direction='reverse'>
              <Home />
            </HorizontalWipe>
          </Route>
          <Route path="/split-horizontal">
              <SplitHorizontalWipe>
                <Home />
              </SplitHorizontalWipe>
          </Route>
          <Route path="/scale-up">
              <ScaleWipe>
                <Home />
              </ScaleWipe>
          </Route>
          <Route path="/star-wipe">
              <StarWipe>
                <Home />
              </StarWipe>
          </Route>
          <Route path="/bounce">
            <BounceWipe>
              <Home />
            </BounceWipe>
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
      <Typography variant="h1">React Wipes</Typography>
      <Typography variant="h2">Github</Typography>
      <a href="https://github.com/rhigdon/react-wipes" rel="noopener noreferrer" target="_blank">https://github.com/rhigdon/react-wipes</a>
      <Typography variant="h2">Install</Typography>
      <Typography variant="subtitle1">npm install react-wipes</Typography>
      <Typography variant="h2">Usage</Typography>
      <Typography variant="subtitle1">Internal Links / External Links</Typography>
      <Typography variant="h2">Examples</Typography>
      <Link replace={false} className="App-link" to="/vertical">Vertical</Link>
      <Link className="App-link" to="/split-vertical">Split Vertical</Link>
      <Link className="App-link" to="/diagonal">Diagonal</Link>
      {/**
      <Link className="App-link" to="/diagonal">Split Diagonal</Link>
      */}
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
