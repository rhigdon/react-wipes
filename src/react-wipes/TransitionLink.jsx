import React from "react"
import {Overlay as VerticalWipeOverlay} from './VerticalWipe'

export function TransitionLink({
  className,
  children,
  color,
  overlay,
  message,
  style,
  to,
}) {
  const [start, setStart] = React.useState(false)
  const Overlay = overlay ? overlay : VerticalWipeOverlay
  return (
    <div style={{cursor:'pointer'}}>
      {start && (
        <Overlay color={color} message={message} start={start} onFinish={()=>{
          const open = window.open(to, '_blank');
          if (!open) {
            window.location.assign(to)
          }
          setStart(false)
        }} />
      )}
      <a className={className} style={{
        ...style,
        color: color,
      }} href={to} onClick={(e)=>{
        setStart(true)
        e.preventDefault()
      }}>
        {children}
      </a>
    </div>
  )
}
