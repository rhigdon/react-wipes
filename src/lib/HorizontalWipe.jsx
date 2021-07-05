import React from 'react';
import {anime} from "react-anime";

function OpenFrame(props) {
  const [isVisible, setIsVisible] = React.useState(true)
  React.useEffect(()=>{
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 1000)
    return ()=>{
      clearTimeout(timeout)
    };
  },[])
  return (
    <div style={{
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      top: 0,
    }}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Screen direction={props.direction}/>
      </div>
    </div>
  )
}
function Screen(props) {
  let ref = React.useRef(null)
  React.useEffect(()=>{
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets:ref.current,
        translateX: props.direction ? `-=${window.innerWidth}` : `${window.innerWidth}px`,
        duration: 1000,
        easing: "easeInOutSine",
      })

  }, [ref, props])
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#61dafb",
      }}
    ></div>
  )
}
export function HorizontalWipe({children, direction}){
  return (
    <div className="App-header">
      <OpenFrame direction={direction}/>
      {children}
    </div>
  )
}
