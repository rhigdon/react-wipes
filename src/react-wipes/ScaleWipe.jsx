import React from 'react';
import Anime, {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  const {color} = props
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(100)}
               duration={5000}
               scale={[0, 1]}
        >
          <div style={{
            background: color ? color : "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight
          }}/>
        </Anime>
      </div>
    </BaseOverlay>
  )
}
export function ScaleWipe({color, children}){
  return (
    <div>
      <Overlay color={color} start={true} message={message} />
      {children}
    </div>
  )
}

export const withScaleWipe = (Component, color, message='') => ({...props}) => {
  return (
    <ScaleWipe color={color} message={message}>
      <Component {...props} />
    </ScaleWipe>
  )
}
