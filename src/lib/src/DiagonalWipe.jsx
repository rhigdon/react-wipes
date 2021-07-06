import React from 'react';
import Anime, {anime} from "react-anime";

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
      top: 0,
      height: "100%",
      overflow: "hidden",
    }}>
      <div style={{display:"flex", width: "100%", height: "100%"}}>
        <Anime delay={anime.stagger(1000)}
              duration={5000}
               translateX={-1400}
               translateY={-1400}
        >
          <div style={{
            transform: 'rotate(45deg)',
            background: "#0b556a",
            width: window.innerWidth,
            height: window.innerHeight * 2.5,
            position: "fixed",
            top: "-450px",
          }}/>
        </Anime>
      </div>
    </div>
  )
}
export function DiagonalWipe({children}){
  return (
    <div className="App-header">
      <OpenFrame />
      {children}
    </div>
  )
}
export const withDiagonalWipe = Component => ({...props}) => {
  return (
    <DiagonalWipe>
      <Component {...props} />
    </DiagonalWipe>
  )
}
