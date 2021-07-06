import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'

function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <CircleShape />
      </div>
    </BaseOverlay>
  )
}
function CircleShape() {
  let style = { position:"fixed", top:0, bottom:0, left:0, right:0, transform: 'scale(3.3)' };
  let ref = React.useRef(null)
  React.useEffect(()=>{
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
  }, [ref])
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      id="e350d5ca-b3f4-4409-80c7-c3f48cc0f93e"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      style={style}
      >
      <circle cx="-183" cy="500" r="57" id="green-halo" fill="none"
        stroke="#0b556a" strokeWidth="115" strokeDasharray="0,20000"
        transform="rotate(-90,100,100)" />
     </svg>
  )
}
export function ClockWipe({children}){
  return (
    <div>
      <Overlay start={true} timeout={2000}/>
      {children}
    </div>
  )
}

export const withClockWipe = Component => ({...props}) => {
  return (
    <ClockWipe>
      <Component {...props} />
    </ClockWipe>
  )
}
