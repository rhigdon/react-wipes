import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  const {color} = props
  const leftRef = React.createRef(null)
  const rightRef = React.createRef(null)
  React.useEffect(()=>{
    if (leftRef && leftRef.current.style.width === "100%") {
      setTimeout(function () {
        leftRef.current.style.width = "0%";
      }, 5);
    }
    if (rightRef && rightRef.current.style.width === "100%") {
      setTimeout(function () {
        rightRef.current.style.width = "0%";
      }, 5);
    }
  }, [leftRef, rightRef])
  return (
    <BaseOverlay {...props}>
      <div style={{
        position: "absolute",
        width: "50%",
        height: "100%",
        top: 0,
      }}>
        <div
          ref={leftRef}
          style={{
            animation: 'shrink infinite 1.1s linear',
            height: `100%`,
            width: `100%`,
            background: color ? color : '#0b556a',
            transition: "height 1s, width 1s",
          }}
        />
      </div>
      <div style={{
        left: "50%",
        position: "absolute",
        width: "50%",
        top: 0,
        height: "100%",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          height: "100%",
          justifyContent: "flex-end"
        }}>
          <div
            ref={rightRef}
            style={{
              animation: 'shrink infinite 1.1s linear',
              height: `100%`,
              background: color ? color : '#0b556a',
              width: `100%`,
            }}
          />
        </div>
      </div>
    </BaseOverlay>
  )
}
export function SplitHorizontalWipe({color, children, message=''}){
  return (
    <div>
      <style>
        {`
          @keyframes shrink {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }
        `}
      </style>
      <Overlay color={color} start={true} message={message} />
      {children}
    </div>
  )
}

export const withSplitHorizontalWipe = (Component, color, message='') => ({...props}) => {
  return (
    <SplitHorizontalWipe color={color} message={message}>
      <Component {...props} />
    </SplitHorizontalWipe>
  )
}
