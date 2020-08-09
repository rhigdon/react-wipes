import React from 'react';
import {BackLink} from '../components/BackLink'

function OpenFrame(props) {
  const [width, setWidth] = React.useState(100)
  const [isVisible, setIsVisible] = React.useState(true)
  const leftRef = React.createRef(null)
  const rightRef = React.createRef(null)
  React.useEffect(()=>{
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 1000)
    return ()=>{
      clearTimeout(timeout)
    };
  },[])
  React.useEffect(()=>{
    if (leftRef && leftRef.current.style.width === "100%") {
      setTimeout(function () {
        leftRef.current.style.width = "0%";
      }, 5);
    }

    if (rightRef && rightRef.current.style.width === "100%") {
      setTimeout(function () {
        rightRef.current.style.width = "0%";
      }, 5);
    }
  }, [])
  return (
    <div style={{
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
    }}>
      <div style={{
        position: "absolute",
        width: "50%",
        height: "100%",
      }}>
        <div
          ref={leftRef}
          className="split-horizontal"
          style={{
            height: `100%`,
            width: `100%`,
            background: 'grey',
            transition: "height 1s, width 1s",
          }}
        />
      </div>
      <div style={{
        left: "50%",
        position: "absolute",
        width: "50%",
        height: "100%",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          height: "100%",
          justifyContent: "flex-end"
        }}>
          <div
            ref={rightRef}
            className="split-horizontal"
            style={{
              height: `100%`,
              background: 'grey',
              width: `100%`,
              //transition: "height 1s, width 1s",
            }}
          />
        </div>
      </div>
    </div>
  )
}
export function SplitHorizontal(){
  return (
    <div className="App-header">
      <OpenFrame />
      <BackLink />
    </div>
  )
}
