import React from 'react'
import {
  //ClockWipe,
  DiagonalWipe,
  HorizontalWipe,
  MatrixWipe,
  ScaleWipe,
  StarWipe,
  VerticalWipe,
  withBounceWipe,
  HeartWipe,
  SplitDiagonalWipe,
  SplitHorizontalWipe,
  SplitVerticalWipe
} from 'react-wipes'
import {ClockWipe, PortalWipe} from './react-wipes'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home} from './views/Home'
import {useSelector} from 'react-redux'
import {getPrimaryColor} from './theme/selectors'

export function Routes() {
  const primaryColor = useSelector(getPrimaryColor)
  return (
    <Router>
        <Switch>
          <Route path="/diagonal">
            <DiagonalWipe color={primaryColor}>
              <Home />
            </DiagonalWipe>
          </Route>
          <Route path="/split-diagonal">
            <SplitDiagonalWipe color={primaryColor}>
              <Home />
            </SplitDiagonalWipe>
          </Route>
          <Route path="/vertical">
              <VerticalWipe color={primaryColor}>
                <Home />
              </VerticalWipe>
          </Route>
          <Route path="/split-vertical">
              <SplitVerticalWipe color={primaryColor}>
                <Home />
              </SplitVerticalWipe>
          </Route>
          <Route path="/heart-wipe">
              <HeartWipe color={primaryColor}>
                <Home />
              </HeartWipe>
          </Route>
          <Route path="/matrix-wipe">
              <MatrixWipe color={primaryColor}>
                <Home />
              </MatrixWipe>
          </Route>
          <Route path="/horizontal">
              <HorizontalWipe color={primaryColor}>
                <Home />
              </HorizontalWipe>
          </Route>
          <Route path="/horizontal-reverse">
            <HorizontalWipe color={primaryColor} direction='reverse'>
              <Home />
            </HorizontalWipe>
          </Route>
          <Route path="/split-horizontal">
              <SplitHorizontalWipe color={primaryColor} message='Testing'>
                <Home />
              </SplitHorizontalWipe>
          </Route>
          <Route path="/scale-up">
              <ScaleWipe color={primaryColor}>
                <Home />
              </ScaleWipe>
          </Route>
          <Route path="/portal-wipe">
              <PortalWipe color={primaryColor}>
                <Home />
              </PortalWipe>
          </Route>
          <Route path="/star-wipe">
              <StarWipe color={primaryColor}>
                <Home />
              </StarWipe>
          </Route>
          <Route component={withBounceWipe(Home, primaryColor)} path="/bounce" />
          <Route path="/clock-wipe">
            <ClockWipe color={primaryColor} message={<div style={{background: 'white'}}>This is an example of a custom message!</div>}>
              <Home />
            </ClockWipe>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
