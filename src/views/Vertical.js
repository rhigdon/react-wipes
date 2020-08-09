import anime from 'animejs/lib/anime.es.js';
import React from "react";
import {BackLink} from '../components/BackLink'

function OpenFrame(props) {
  const [height, setHeight] = React.useState(50)
  const [isVisible, setIsVisible] = React.useState(true)
  React.useEffect(()=>{
    setHeight(0)
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 1000)
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
    }}>
      <div
        style={{
          width: "100%",
          background: 'grey',
        }}
        className="vertical"
      />
      <div
        style={{
          height: `${height}vh`,
          background: 'grey',
          width: "100%",
          transition: "height 1s",
        }}
      />
      <Shape />
    </div>
  )
}

export function Vertical(){
  return (
    <div className="App-header">
      <BackLink />
      <OpenFrame />
    </div>
  )
}

function Shape (){

  React.useEffect(()=>{
    const duration = 4000;
    const shape = document.querySelector('.shape');
    const path = shape.querySelector('path');
    anime({
      targets: shape,
      scaleY: [
        {
          value: [1, 1.8],
          duration: duration * 0.5,
          easing: 'easeInQuad',
        },
        {
          value: 1,
          duration: duration * 0.5,
          easing: 'easeOutQuad',
        }
      ]
    });
    anime({
      targets: path,
      duration,
      easing: 'easeOutQuad',
      d: path.getAttribute('d')
    });
  }, [])

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
