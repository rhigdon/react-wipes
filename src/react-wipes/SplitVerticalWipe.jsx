import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  const {color} = props
  return (
    <BaseOverlay {...props}>
      <div style={{
        position: "absolute",
        width: "100%",
        height: "50%",
      }}>
        <div
          style={{
            animation: "shrinkHeight infinite 1s linear",
            height: `100%`,
            width: `100%`,
            background: color ? color : '#0b556a',
          }}
        />
      </div>
      <div style={{
        top: "50%",
        position: "absolute",
        width: "100%",
        height: "50%",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          height: "100%",
          alignItems: "flex-end"
        }}>
          <div
            className="split-vertical"
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
export function SplitVerticalWipe({children, color}){
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
      <Overlay color={color} start={true}/>
      {children}
    </div>
  )
}

export const withSplitVerticalWipe = (Component, color) => ({...props}) => {
  return (
    <SplitVerticalWipe color={color}>
      <Component {...props} />
    </SplitVerticalWipe>
  )
}
