import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {TransitionLink} from 'react-wipes'
import {Overlay as StarWipeOverlay} from 'react-wipes/StarWipe'
import {Link} from "react-router-dom";
import {CirclePicker} from 'react-color'
import {setPrimaryColor} from '../theme/actions'
import {getPrimaryColor} from "../theme/selectors";
import {useDispatch, useSelector} from 'react-redux'
import './Home.css'

export function Home() {
  const dispatch = useDispatch()
  const primaryColor = useSelector(getPrimaryColor)
  return (
    <div className="App-header">
      <Typography variant="h1">
        <img
          alt="left-title-icon"
          className="logo-icon"
          width="75px"
          src="/react-wipes/cinema_icon.svg"
        />
        React Wipes
        <img
          alt="right-title-icon"
          className="right-logo-icon"
          width="75px"
          src="/react-wipes/cinema_icon.svg"
        />
        </Typography>
      <Typography variant="h2">Github</Typography>
      <Box m={1}>
        <TransitionLink
          color={primaryColor}
          to="https://github.com/rhigdon/react-wipes"
        >https://github.com/rhigdon/react-wipes</TransitionLink>
      </Box>
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
      <Typography variant="h2">Color Support</Typography>
      <Box m={3}>
        <CirclePicker onChangeComplete={color => {
          dispatch(setPrimaryColor(color.hex))
        }}/>
      </Box>
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
              color={primaryColor}
              overlay={StarWipeOverlay}
              to="https://ryanhigdon.com"
            >Ryan Higdon</TransitionLink>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function AppLink({to}) {
  const primaryColor = useSelector(getPrimaryColor)
  return (
    <Box m={1}>
      <Link
        style={{color: primaryColor}}
        onClick={()=>{
          window.location.href="/react-wipes#"+to
          if (window.location.hash === ("#" + to)) {
            window.location.reload()
          }
        }}
        to={to}>
        {to}
      </Link>
    </Box>
  )
}
