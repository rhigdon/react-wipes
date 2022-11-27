# React Wipes

Set of example transitions to build on and wrap your components with. Uses
AnimeJS, CSS for transitions.

See example site here: https://rhigdon.github.io/react-wipes/

# API

## Base Wipes

- ClockWipe
- DiagonalWipe
- SplitDiagonalWipe
- HeartWipe
- HorizontalWipe
- MatrixWipe
- ScaleWipe
- SplitHorizontalWipe
- SplitVerticalWipe
- StarWipe
- VerticalWipe

All of these inherit from the base component

- Overlay
  - color (optional): any hex string ex. "#000000"
  - message (optional): a message to be displayed in the center of the transition
  - start boolean: in case you don't want to immediately start your transition

## HoC helper functions

Each of the base wipes will have a HoC helper function ie. withBounceWipe available

```js
withBounceWipe(<div />);
withBounceWipe(<div />, "#000000"); // color as optional secondary argument
withBounceWipe(<div />, "#000000", "Bounce on outta here"); // color and message
```

```js
import { withDiagonalWipe } from "react-wipes";

function ExampleDiv() {
  return <div />;
}

export default withDiagonalWipe(ExampleDiv, "#000000");
```

## TransitionLink

TransitionLink is used to visit external websites that can't be wrapped by react component. Instead it plays a transition wipe then
exists the user to the new site. Each of the base wipes can be provided as an overlay to the TransitionLink

- TransitionLink
  - overlay \[Component\] (optional): which overlay to use
  - to \[string\]: website to navigate to
  - color \[string\] (optional): hex string for overlay and link

```js
import { TransitionLink } from "react-wipes";
import { Overlay as StarWipeOverlay } from "react-wipes/StarWipe";

<TransitionLink
  className="your-css-class"
  style={{ border: "2px solid grey" }}
  color="#000000"
  to="www.google.com"
  overlay={StarWipeOverlay}
>
  Let Me Google That For You
</TransitionLink>;
```

# Integration

### Usage with Material UI

```js
import Link from '@material-ui/core/Link'
import {TransitionLink} from 'react-wipes'
import {Overlay as StarWipeOverlay} from 'react-wipes/StarWipe'

<TransitionLink
  className="your-css-class"
  style={{border: '2px solid grey'}}
  color='#000000'
  message='Enjoy your googling!'
  to='www.google.com'
  overlay={StarWipeOverlay}
>
  <Link>Let Me Google That For You<Link>
</TransitionLink>
```

### Usage with `react-router-dom`

This is good for wrapping your components as children of the wipe

```js
import { DiagonalWipe } from "react-wipes";
<Router>
  <Switch>
    <Route path="/diagonal">
      <DiagonalWipe>
        <Home />
      </DiagonalWipe>
    </Route>
  </Switch>
</Router>;
```
