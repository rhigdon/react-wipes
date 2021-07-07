import React from "react"
import {Overlay as HorizontalWipeOverlay} from './HorizontalWipe'
import {Overlay as VerticalWipeOverlay} from './VerticalWipe'
import {Overlay as StarWipeOverlay} from './StarWipe'
import {Overlay as SplitVerticalWipeOverlay} from './SplitVerticalWipe'
import {Overlay as SplitHorizontalWipeOverlay} from './SplitHorizontalWipe'
import {Overlay as ScaleWipeOverlay} from './ScaleWipe'


function getOverlay(overlay) {
  switch(overlay) {
    case "horizontal":
      return HorizontalWipeOverlay
    case "scale":
      return ScaleWipeOverlay
    case "split-horizontal":
      return SplitHorizontalWipeOverlay
    case "split-vertical":
      return SplitVerticalWipeOverlay
    case "star":
      return StarWipeOverlay
    case "vertical":
      return VerticalWipeOverlay
    default:
      return VerticalWipeOverlay
  }
}

export function TransitionLink({className, children, overlay, style, to}){
  const [start, setStart] = React.useState(false)
  const Overlay = overlay ? getOverlay(overlay) : VerticalWipeOverlay
  return (
    <div style={{cursor:'pointer'}}>
      {start && (
        <Overlay color={style.color ? style.color : ''} start={start} onFinish={()=>{
          const open = window.open(to, '_blank');
          if (!open) {
            window.location.assign(to)
          }
          setStart(false)
        }} />
      )}
      <a className={className} style={style} href={to} onClick={(e)=>{
        setStart(true)
        e.preventDefault()
      }}>
        {children}
      </a>
    </div>
  )
}
