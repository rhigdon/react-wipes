import React from 'react';

function OpenFrame(props) {
  const [isVisible, setIsVisible] = React.useState(true)
  const leftRef = React.createRef(null)
  const rightRef = React.createRef(null)
  React.useEffect(()=>{
    let timeout = setTimeout(()=>{
      setIsVisible(false)
    }, 900)
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
  }, [leftRef, rightRef])
  return (
    <div style={{
      display: isVisible ? "block" : "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
    }}>
      <div style={{
        position: "absolute",
        width: "50%",
        height: "100%",
        top: 0,
      }}>
        <div
          ref={leftRef}
          className="split-horizontal"
          style={{
            height: `100%`,
            width: `100%`,
            background: '#0b556a',
            transition: "height 1s, width 1s",
          }}
        />
      </div>
      <div style={{
        left: "50%",
        position: "absolute",
        width: "50%",
        top: 0,
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
              background: '#0b556a',
              width: `100%`,
              //transition: "height 1s, width 1s",
            }}
          />
        </div>
      </div>
    </div>
  )
}
export function SplitHorizontalWipe({children}){
  return (
    <div>
      <OpenFrame />
      {children}
    </div>
  )
}
