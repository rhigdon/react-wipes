import React from "react";

function Overlay() {
  const [isVisible, setIsVisible] = React.useState(true)
  React.useEffect(() => {
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 920)
    return ()=>{
      clearTimeout(timeout)
    };
  }, [])
  return (
    <div style={{
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
    }}>
      <div
        style={{
          width: "100%",
          background: '#0b556a',
        }}
        className="vertical"
      />
      <div
        style={{
          background: '#0b556a',
          width: "100%",
          transition: "height 1s",
        }}
      />
      <Shape />
    </div>
  )
}

export function VerticalWipe({children}){
  return (
    <div>
      <Overlay />
      {children}
    </div>
  )
}

function Shape (){
  return (
    <svg
      className="shape"
      preserveAspectRatio="none" viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z">
      </path>
    </svg>
  )
}
