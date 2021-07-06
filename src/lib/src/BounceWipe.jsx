import React, { useEffect, useRef, useState } from 'react';
import {anime} from 'react-anime';
import {Overlay as BaseOverlay} from './Overlay'

export let BounceWipe = (props) => {
    const {children} = props
    let ref = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let t = anime.timeline();

        t.add({
          targets: ref.current,
          translateY: window.innerHeight,
          easing: 'easeInOutSine'
        })
        .add({
            targets: ref.current,
            translateY: `-=${window.innerHeight * 2}`
        })

        t.finished.then(() => {
            setIsVisible(false)
        })
    })

    return (
        <div>
            <BaseOverlay start={isVisible} timeout={1500} {...props}>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                <div
                    ref={ref}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#61dafb'
                    }}></div>
            </div></BaseOverlay>
            {children}
        </div>
    )
}
export const withBounceWipe = Component => ({...props}) => {
  return (
    <BounceWipe>
      <Component {...props} />
    </BounceWipe>
  )
}
