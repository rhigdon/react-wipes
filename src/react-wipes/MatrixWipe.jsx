import React from 'react';
import {anime} from "react-anime";
import {Overlay as BaseOverlay} from './Overlay'

export function Overlay(props) {
  return (
    <BaseOverlay {...props}>
      <div style={{display:"flex", width: "100%", height: "100%", justifyContent: "center",}}>
        <MatrixCutout color={props.color} />
      </div>
    </BaseOverlay>
  )
}
function MatrixCutout({color, secondaryColor}) {
  let ref = React.useRef(null)
  React.useEffect(()=>{
    if (ref.current) {
      var basicTimeline = anime.timeline();
      basicTimeline
        .add({
          targets: '.matrix-secondary-row',
          opacity: [1, 0],
          duration: 750,
          easing: "easeOutSine"
        })
        .add({
          targets: '.matrix-primary-row',
          opacity: [1, 0],
          duration: 750,
          easing: "easeOutSine"
        })
    }
  }, [ref])
  const width = "68"
  const height= "68"
  const SQUARES = 68;
  return (
    <svg
      id="matrix-cutout"
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 518 517.94">
      {[...new Array(8)].map((_, rowIdx) => {
        let fillColor
        return (
            <React.Fragment key={rowIdx}>
              {[...new Array(8)].map((_, colIdx) => {
                let isEvenRow = rowIdx % 2
                if (colIdx % 2 === 0) {
                  isEvenRow = !isEvenRow
                }
                if (isEvenRow) {
                  fillColor = color ? color : "#231f20"
                } else {
                  fillColor = secondaryColor ? secondaryColor : "#e6e7e8"
                }
                let x = rowIdx * SQUARES
                return (
                  <rect
                    key={`${colIdx}-${rowIdx}`}
                    stroke="#000000"
                    className={isEvenRow ? "matrix-primary-row" : "matrix-secondary-row"}
                    fill={fillColor}
                    x={x}
                    y={SQUARES * colIdx}
                    width={height}
                    height={width}
                  />
                )
              })}
            </React.Fragment>
        )
      })}
    </svg>
  )
}
export function MatrixWipe({color, children}){
  return (
    <div>
      <Overlay color={color} start={true} />
      {children}
    </div>
  )
}

export const withMatrixWipe = (Component, color) => ({...props}) => {
  return (
    <MatrixWipe color={color}>
      <Component {...props} />
    </MatrixWipe>
  )
}
