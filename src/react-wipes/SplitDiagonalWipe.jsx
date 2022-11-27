import React from 'react';
import Anime, {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  const {color} = props
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(1000)}
              duration={8000}
               translateX={-1400}
               translateY={-1400}
        >
          <div style={{
            transform: 'rotate(45deg)',
            background: color ? color : "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight * 2.5,
            position: "fixed",
            top: "-450px",
            left: 0,
          }}/>
        </Anime>
        <Anime delay={anime.stagger(1000)}
              duration={8000}
               translateX={1400}
               translateY={1400}
        >
          <div style={{
            transform: 'rotate(45deg)',
            background: color ? color : "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight * 2.5,
            position: "fixed",
            top: "-450px",
          }}/>
        </Anime>
      </div>
    </BaseOverlay>
  )
}
export function SplitDiagonalWipe({color, children, message=''}){
  return (
    <div>
      <Overlay color={color} start={true} message={message} />
      {children}
    </div>
  )
}
export const withSplitDiagonalWipe = (Component, color, message='') => ({...props}) => {
  return (
    <SplitDiagonalWipe color={color} message={message} >
      <Component {...props} />
    </SplitDiagonalWipe>
  )
}
