import React from 'react';
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{
        position: "absolute",
        width: "100%",
        height: "50%",
      }}>
        <div
          className="split-vertical"
          style={{
            height: `100%`,
            width: `100%`,
            background: '#0b556a',
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
              background: '#0b556a',
              width: `100%`,
            }}
          />
        </div>
      </div>
    </BaseOverlay>
  )
}
export function SplitVerticalWipe({children}){
  return (
    <div>
      <Overlay start={true}/>
      {children}
    </div>
  )
}

export const withSplitVerticalWipe = Component => ({...props}) => {
  return (
    <SplitVerticalWipe>
      <Component {...props} />
    </SplitVerticalWipe>
  )
}
