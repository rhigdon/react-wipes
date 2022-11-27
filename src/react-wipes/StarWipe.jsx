import React from 'react';
import {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <StarCutout color={props.color} />
      </div>
    </BaseOverlay>
  )
}
function StarCutout({color}) {
  let style = {
    position:"fixed", top:0, bottom:0, left:0, right:0,
    overflow: "hidden",
  };
  let ref = React.useRef(null)
  React.useEffect(()=>{
    if (ref && ref.current) {
      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets:ref.current,
          scale: [1, 55],
          duration: 3000,
          easing: "easeOutSine"
        })
    }
  }, [ref])
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      id="e350d5ca-b3f4-4409-80c7-c3f48cc0f93e"
      data-name="Star Cutout"
      viewBox="0 0 1024 768"
      style={style}
      >
      <path
      d="M.5,767.5V.5h1023v767ZM540.55,436.78l-7-48.89,36.31-33.47L521.21,346,500.6,301.08l-23.08,43.66-49,5.74,34.39,35.44-9.7,48.42,44.33-21.75Z"
      fill={color ? color : "#fff"}
      />
      <path
      fill={color ? color : "#61dafb"}
       d="M1023,1V767H1V1H1023M477.2,344.28l-47.78,5.58-2,.24,1.41,1.45,33.5,34.53-9.45,47.17-.4,2,1.82-.9,43.19-21.19,41.94,23.57,1.76,1-.28-2-6.81-47.63,35.37-32.6L571,354.1l-2-.34-47.4-8.25L501.48,301.8l-.85-1.85-.94,1.8L477.2,344.28M1024,0H0V768H1024V0ZM453.85,433.45l9.55-47.69-33.87-34.9,48.31-5.65,22.73-43,20.3,44.2,47.91,8.33L533,387.7l6.88,48.15L497.51,412l-43.66,21.43Z"/></svg>
  )
}
export function StarWipe({color, children, message=''}){
  return (
    <div>
      <Overlay color={color} start={true} message={message} />
      {children}
    </div>
  )
}

export const withStarWipe = (Component, color, message='') => ({...props}) => {
  return (
    <StarWipe color={color} message={message}>
      <Component {...props} />
    </StarWipe>
  )
}
