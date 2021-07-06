import React from 'react';
import Anime, {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(1000)}
              duration={5000}
               translateX={-1400}
               translateY={-1400}
        >
          <div style={{
            transform: 'rotate(45deg)',
            background: "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight * 2.5,
            position: "fixed",
            top: "-50px",
          }}/>
        </Anime>
      </div>
    </BaseOverlay>
  )
}
export function DiagonalWipe({children}){
  return (
    <div>
      <Overlay start={true}/>
      {children}
    </div>
  )
}
export const withDiagonalWipe = Component => ({...props}) => {
  return (
    <DiagonalWipe>
      <Component {...props} />
    </DiagonalWipe>
  )
}
