import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <CircleShape color={props.color} />
      </div>
    </BaseOverlay>
  )
}
function CircleShape({color}) {
  let style = { position:"fixed", top:0, bottom:0, left:80, right:0, transform: 'scale(7.0)' };
  React.useEffect(() => {
    var circle = document.getElementById('green-halo');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    window.timer = window.setInterval(function () {
        circle.setAttribute("stroke-dasharray", angle + ", 20000");
        if (angle >= 360) {
            window.clearInterval(window.timer);
        }
        angle += angle_increment;
    }, interval);
  }, [])
  return (
    <svg
      width="100%"
      height="100%"
      id="e350d5ca-b3f4-4409-80c7-c3f48cc0f93e"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      style={style}
      >
      <circle cx="-183" cy="500" r="57" id="green-halo" fill="none"
        stroke={`${color ? color : '#0b556a'}`} strokeWidth="115" strokeDasharray="0,20000"
        transform="rotate(-90,100,100)" />
     </svg>
  )
}
export function ClockWipe({color, children, message=''}){
  return (
    <div>
      <Overlay message={message} color={color} start={true} timeout={2000}/>
      {children}
    </div>
  )
}

export const withClockWipe = (Component, color, message='') => ({...props}) => {
  return (
    <ClockWipe color={color} message=''>
      <Component {...props} />
    </ClockWipe>
  )
}
