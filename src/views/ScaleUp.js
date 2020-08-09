import React from 'react';
import Anime, {anime} from "react-anime";
import {BackLink} from '../components/BackLink'

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
    }}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(100)}
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
export function ScaleUp(){
  return (
    <div className="App-header">
      <OpenFrame />
      <BackLink />
    </div>
  )
}
