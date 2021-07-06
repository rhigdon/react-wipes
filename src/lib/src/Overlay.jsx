import React from 'react'

export function Overlay({children, start, onFinish, timeout}) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [top, setTop] = React.useState(parseInt(window.scrollY, 10))
  const ref = React.createRef(null)
  React.useEffect(() => {
    if (!start) return
    let _timeout = setTimeout(()=>{
      if (onFinish) {
        onFinish()
      }
      setIsVisible(false)
    }, timeout ? timeout : 900)
    return ()=>{
      clearTimeout(_timeout)
    };
  }, [start, onFinish, timeout])
  React.useEffect(() => {
    setTop(parseInt(window.scrollY, 10))
  }, [ref])
  return (
    <div ref={ref} style={{
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: top,
      left: 0,
      overflow: "hidden",
    }}>
      {children}
    </div>
  )
}
