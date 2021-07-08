import React from 'react'
import {
  ClockWipe,
  DiagonalWipe,
  HorizontalWipe,
  ScaleWipe,
  SplitHorizontalWipe,
  SplitVerticalWipe,
  StarWipe,
  VerticalWipe,
  withBounceWipe,
} from 'react-wipes'
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
              <SplitHorizontalWipe color={primaryColor}>
                <Home />
              </SplitHorizontalWipe>
          </Route>
          <Route path="/scale-up">
              <ScaleWipe color={primaryColor}>
                <Home />
              </ScaleWipe>
          </Route>
          <Route path="/star-wipe">
              <StarWipe color={primaryColor}>
                <Home />
              </StarWipe>
          </Route>
          <Route component={withBounceWipe(Home, primaryColor)} path="/bounce" />
          <Route path="/clock-wipe">
            <ClockWipe color={primaryColor}>
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
