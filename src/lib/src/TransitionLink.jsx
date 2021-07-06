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

export function TransitionLink({className, children, overlay, to}){
  const [start, setStart] = React.useState(false)
  const Overlay = overlay ? getOverlay(overlay) : VerticalWipeOverlay
  return (
    <div style={{cursor:'pointer'}}>
      {start && (
        <Overlay start={start} onFinish={()=>{
          window.open(to, '_blank');
          setStart(false)
        }} />
      )}
      <a className={className} href={to} onClick={(e)=>{
        setStart(true)
        e.preventDefault()
      }}>
        {children}
      </a>
    </div>
  )
}
