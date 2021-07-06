import React from 'react';

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
      top: 0,
    }}>
      <div style={{
        position: "absolute",
        width: "100%",
        height: "50%",
      }}>
        <div
          className="split-vertical"
          style={{
            height: `100%`,
            width: `100%`,
            background: '#0b556a',
          }}
        />
      </div>
      <div style={{
        top: "50%",
        position: "absolute",
        width: "100%",
        height: "50%",
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          height: "100%",
          alignItems: "flex-end"
        }}>
          <div
            className="split-vertical"
            style={{
              height: `100%`,
              background: '#0b556a',
              width: `100%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
export function SplitVerticalWipe({children}){
  return (
    <div className="App-header">
      <OpenFrame />
      {children}
    </div>
  )
}

export const withSplitVerticalWipe = Component => ({...props}) => {
  return (
    <SplitVerticalWipe>
      <Component {...props} />
    </SplitVerticalWipe>
  )
}
