import React from 'react'

export function Overlay({children, message, start, onFinish, timeout}) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [top, setTop] = React.useState(0)
  const [innerHeight, setInnerHeight] = React.useState(0)
  React.useEffect(() => {
    let mounted = true
    if (!start) return
    let _timeout = setTimeout(()=>{
      if (onFinish) {
        onFinish()
      }
      if (mounted) setIsVisible(false)
    }, timeout ? timeout : 900)
    return () => {
      mounted = false
      clearTimeout(_timeout)
    };
  }, [start, onFinish, timeout])
  React.useEffect(() => {
    setTop(parseInt(window.scrollY, 10))
    setInnerHeight(window.innerHeight);
  }, [])
  return (
    <>
      <div style={{
        display: isVisible ? "block" : "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: top,
        left: 0,
        overflow: "hidden",
        zIndex: 100,
      }}>
        {children}
      </div>
      <div style={{
        display: isVisible ? "block" : "none",
        position: "absolute",
        top: top + innerHeight / 2,
        left: '46%',
        overflow: "hidden",
        zIndex: 100,
        transform: 'translate(-50%, -50%)'
      }}>
        {message}
      </div>
    </>
  )
}
