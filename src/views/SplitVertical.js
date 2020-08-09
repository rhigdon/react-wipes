import React from 'react';
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
            background: 'grey',
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
              background: 'grey',
              width: `100%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
export function SplitVertical(){
  return (
    <div className="App-header">
      <OpenFrame />
      <BackLink />
    </div>
  )
}
