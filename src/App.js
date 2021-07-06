import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import {
  ClockWipe,
  DiagonalWipe,
  HorizontalWipe,
  ScaleWipe,
  SplitHorizontalWipe,
  SplitVerticalWipe,
  StarWipe,
  TransitionLink,
  VerticalWipe,
  withBounceWipe,
} from 'react-wipes/dist'

function App() {
  return (
    <Router>
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
          <Route component={withBounceWipe(Home)} path="/bounce" />
          <Route path="/clock-wipe">
            <ClockWipe>
              <Home />
            </ClockWipe>
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
      <TransitionLink
        className="App-link"
        to="https://github.com/rhigdon/react-wipes"
      >https://github.com/rhigdon/react-wipes</TransitionLink>
      <Typography variant="h2">Install</Typography>
      <Typography variant="h3">npm i react-wipes</Typography>
      <Typography variant="h2">Examples</Typography>
      <AppLink to="clock-wipe">Clock Wipe</AppLink>
      <AppLink to="star-wipe">Star Wipe</AppLink>
      <AppLink to="scale-up">Scale Up</AppLink>
      <AppLink to="vertical">Vertical</AppLink>
      <AppLink to="split-vertical">Split Vertical</AppLink>
      <AppLink to="diagonal">Diagonal</AppLink>
      {/**
      <Link className="App-link" to="/diagonal">Split Diagonal</Link>
      */}
      <AppLink to="horizontal">Horizontal</AppLink>
      <AppLink to="horizontal-reverse">Horizontal Reverse</AppLink>
      <AppLink to="split-horizontal">Split Horizontal</AppLink>
      <AppLink to="bounce">Bounce</AppLink>
      {/**
        <Link className="App-link" to="/next">Matrix</Link>
        <Link className="App-link" to="/next">Heart</Link>
      */}
      <Box m={5}>
        <Grid container alignItems="baseline" justify="center" spacing={1}>
          <Grid item>
            <Typography>Made with ❤ by</Typography>
          </Grid>
          <Grid item>
            <TransitionLink
              overlay="scale"
              className="App-link"
              to="https://ryanhigdon.com"
            >Ryan Higdon</TransitionLink>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function AppLink({to}) {
  return (
    <Link className="App-link" onClick={()=>{
      window.location.href="/react-wipes#"+to
      if (window.location.hash === ("#" + to)) {
        window.location.reload()
      }
    }} to={to}>{to}</Link>
  )
}


export default App;
