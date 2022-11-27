import React from "react";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay({color, start, onFinish, message}) {
  return (
    <BaseOverlay start={start} onFinish={onFinish} message={message}>
      <div
        style={{
          width: "100%",
          background: color ? color : '#0b556a',
          animation: "shrinkHeight infinite 1s linear"
        }}
      />
      <div
        style={{
          background: color ? color : '#0b556a',
          width: "100%",
          transition: "height 1s",
        }}
      />
      <Shape color={color} />
    </BaseOverlay>
  )
}

export function VerticalWipe({color, children, message=''}){
  const [start, setStart] = React.useState(true)
  return (
    <div>
      <style>
        {`
          @keyframes shrinkHeight {
            from {
              height: 100%;
            }
            to {
              height: 0%;
            }
          }
        `}
      </style>
      <Overlay
        message={message}
        color={color}
        start={start}
        onFinish={()=>setStart(false)}
      />
      {children}
    </div>
  )
}

function Shape ({color}){
  return (
    <svg
      className="shape"
      preserveAspectRatio="none" viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path fill={color} d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z">
      </path>
    </svg>
  )
}

export const withVerticalWipe = (Component, color, message='') => ({...props}) => {
  return (
    <VerticalWipe color={color} message={message}>
      <Component {...props} />
    </VerticalWipe>
  )
}
