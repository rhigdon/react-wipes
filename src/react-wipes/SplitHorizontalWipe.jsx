import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'
import './SplitHorizontalWipe.css'

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
          className="split-horizontal"
          style={{
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
            className="split-horizontal"
            style={{
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
export function SplitHorizontalWipe({color, children}){
  return (
    <div>
      <Overlay color={color} start={true}/>
      {children}
    </div>
  )
}

export const withSplitHorizontalWipe = (Component, color) => ({...props}) => {
  return (
    <SplitHorizontalWipe color={color}>
      <Component {...props} />
    </SplitHorizontalWipe>
  )
}
