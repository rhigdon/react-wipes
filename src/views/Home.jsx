import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import {TransitionLink} from 'react-wipes'
import {Overlay as StarWipeOverlay} from 'react-wipes/StarWipe'
import {Link} from "react-router-dom";
import {CirclePicker} from 'react-color'
import {setPrimaryColor} from '../theme/actions'
import {getPrimaryColor} from "../theme/selectors";
import {useDispatch, useSelector} from 'react-redux'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './Home.css'

function Logo({primaryColor}) {
  return (
    <Grid container alignItems="center">
      <Tooltip title="React Wipes are reel fun.">
        <Box m={1}>
          <img
            alt="left-title-icon"
            className="logo-icon"
            width="25px"
            src="/react-wipes/cinema_icon.svg"
          />
        </Box>
      </Tooltip>
      <Typography variant="h6">
        <Link
          style={{color: primaryColor}}
          to="/"
        >React Wipes</Link>
      </Typography>
      <Tooltip title="Use them once, and they'll reel you in.">
        <Box m={1}>
          <img
            alt="right-title-icon"
            className="right-logo-icon"
            width="25px"
            src="/react-wipes/cinema_icon.svg"
          />
        </Box>
      </Tooltip>
    </Grid>
  )
}

function Install() {
  const INSTALL_TEXT = "yarn add react-wipes"
  const [open, setOpen] = React.useState(false)
  return (
    <Grid container alignItems="center" spacing={2}>
      <Typography>{INSTALL_TEXT}</Typography>
      <Grid item>
        <Box m={1}>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={() => setOpen(false)}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Copied!"
            >
              <IconButton
                onClick={() => {
                  navigator.clipboard.writeText(INSTALL_TEXT)
                  setOpen(true)
                }}
              ><FileCopyIcon/></IconButton>
            </Tooltip>
          </ClickAwayListener>
        </Box>
      </Grid>
    </Grid>
  )
}

export function Home() {
  const dispatch = useDispatch()
  const primaryColor = useSelector(getPrimaryColor)
  const trigger = useScrollTrigger({target: window ? window : undefined });
  return (
    <div className="App-header">
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar style={{zIndex: 0, background: '#424242'}}>
          <Grid container direction="row" alignItems="center" justify="space-between" spacing={2}>
            <Grid item>
              <Logo primaryColor={primaryColor} />
            </Grid>
            <Grid item>
              <Install />
            </Grid>
          </Grid>
        </AppBar>
      </Slide>
      <Typography variant="h2">Github</Typography>
      <Box m={1}>
        <TransitionLink
          color={primaryColor}
          to="https://github.com/rhigdon/react-wipes"
        >https://github.com/rhigdon/react-wipes</TransitionLink>
      </Box>
      <Typography variant="h2">Examples</Typography>
      <AppLink to="/clock-wipe">Clock Wipe</AppLink>
      <AppLink to="/star-wipe">Star Wipe</AppLink>
      <AppLink to="/heart-wipe">Heart Wipe</AppLink>
      <AppLink to="/matrix-wipe">Matrix Wipe</AppLink>
      <AppLink to="/scale-up">Scale Up</AppLink>
      <AppLink to="/vertical">Vertical</AppLink>
      <AppLink to="/split-vertical">Split Vertical</AppLink>
      <AppLink to="/diagonal">Diagonal</AppLink>
      <AppLink to="/split-diagonal">Split Diagonal</AppLink>
      <AppLink to="/horizontal">Horizontal</AppLink>
      <AppLink to="/horizontal-reverse">Horizontal Reverse</AppLink>
      <AppLink to="/split-horizontal">Split Horizontal</AppLink>
      <AppLink to="/bounce">Bounce</AppLink>
      <Typography variant="h2">Color Support</Typography>
      <Box m={3}>
        <CirclePicker onChangeComplete={color => {
          dispatch(setPrimaryColor(color.hex))
        }}/>
      </Box>
      {/**
        <Link className="App-link" to="/next">Matrix</Link>
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

function AppLink({children, to}) {
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
        {children}
      </Link>
    </Box>
  )
}
