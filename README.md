# React Wipes
Set of example transitions to build on and wrap your components with.  Uses
AnimeJS, CSS for transitions.


See example site here: https://rhigdon.github.io/react-wipes/

## Usage with `react-router-dom`
This is good for wrapping your components as children of the wipe
```js
import {DiagonalWipe} from 'react-wipes'
<Router>
    <Switch>
      <Route path="/diagonal">
        <DiagonalWipe>
          <Home />
        </DiagonalWipe>
      </Route>
    </Switch>
</Router>
```

## Transition before external Link
```js
import {TransitionLink} from 'react-wipes'

<TransitionLink to='www.google.com'>Let Me Google That For You</TransitionLink>
```
## Usage as a HoC (High Order Component)
```js
import {withDiagonalWipe} from 'react-wipes'

function ExampleDiv() {
  return (<div />)
}

export default withDiagonalWipe(ExampleDiv)
```
