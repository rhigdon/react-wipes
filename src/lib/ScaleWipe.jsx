import React from 'react';
import Anime, {anime} from "react-anime";

function OpenFrame(props) {
  const [isVisible, setIsVisible] = React.useState(true)
  React.useEffect(()=>{
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 900)
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
        <Anime delay={anime.stagger(100)}
               duration={5000}
               scale={[0, 1]}
        >
          <div style={{
            background: "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight
          }}/>
        </Anime>
      </div>
    </div>
  )
}
export function ScaleWipe({children}){
  return (
    <div>
      <OpenFrame />
      {children}
    </div>
  )
}
