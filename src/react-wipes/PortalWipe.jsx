import React from 'react';
import Anime, {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  const {color} = props
  const [sideWidth, setSideWidth] = React.useState(0);
  React.useEffect(() => {
    setSideWidth(window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight)
  }, [])
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(100)}
               duration={1000}
               scale={[0, 1.5, 0]}
               easing='linear'
        >
          <div style={{
            background: color ? color : "#0b556a",
            borderRadius: '50%',
            width: sideWidth,
            height: sideWidth
          }}/>
        </Anime>
      </div>
    </BaseOverlay>
  )
}
export function PortalWipe({color, children, message=''}){
  return (
    <div>
      <Overlay color={color} start={true} message={message} />
      {children}
    </div>
  )
}

export const withPortalWipe = (Component, color, message='') => ({...props}) => {
  return (
    <PortalWipe color={color} message={message}>
      <Component {...props} />
    </PortalWipe>
  )
}
