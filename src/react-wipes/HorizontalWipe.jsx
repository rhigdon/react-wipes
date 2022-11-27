import React from 'react';
import {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Screen color={props.color} direction={props.direction}/>
      </div>
    </BaseOverlay>
  )
}
function Screen(props) {
  const {color, direction} = props
  let ref = React.useRef(null)
  React.useEffect(()=>{
    if (ref && ref.current) {
      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets:ref.current,
          translateX: direction ? `-=${window.innerWidth}` : `${window.innerWidth}px`,
          duration: 1000,
          easing: "easeInOutSine",
        })
    }
  }, [ref, direction])
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: color ? color : "#61dafb",
      }}
    ></div>
  )
}
export function HorizontalWipe({color, children, direction, message=''}){
  return (
    <div>
      <Overlay color={color} start={true} direction={direction} message={message}/>
      {children}
    </div>
  )
}

export const withHorizontalWipe = (Component, color, message='') => ({...props}) => {
  return (
    <HorizontalWipe color={color} message={message}>
      <Component {...props} />
    </HorizontalWipe>
  )
}
