import React, { useRef, useEffect } from "react"
import { useSpring, animated, to } from "@react-spring/web"
import { useGesture } from "react-use-gesture"
// import PropTypes from 'prop-types';


export default function SpringGesture(props: any) {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener("gesturestart", preventDefault)
    document.addEventListener("gesturechange", preventDefault)

    return () => {
      document.removeEventListener("gesturestart", preventDefault)
      document.removeEventListener("gesturechange", preventDefault)
    }
  }, [])

  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
      ...props.initial,
    })
  )

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

  useGesture(
    {
      // onDrag: ({ active, offset: [x, y] }) =>
      //   api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      // onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          // rotateX: calcX(py, y.get()),
          // rotateY: calcY(px, x.get()),
          rotateX: 50,
          scale: 2.1,
          ...props.mouseEnter,
        }),
      onHover: ({ hovering }) =>
        !hovering &&
        api(props.mouseLeave || { rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault()
        wheelApi.set({ wheelY: y })
      },
    },
    { domTarget, eventOptions: { passive: false } }
  )
  return (
    <div
      className={`${props.classes && props.classes.root} dev-spring-gesture`}
    >
      <div className="container">
        <animated.div
          ref={domTarget}
          className="card"
          style={{
            borderRadius:props.borderRadius,
            transform: "perspective(600px)",
            x,
            y,
            scale: to([scale, zoom], (s, z) => s + z),
            rotateX,
            rotateY,
            rotateZ,
          }}
        >
          {props.children}
        </animated.div>
      </div>
    </div>
  )
}

SpringGesture.propTypes = {}
SpringGesture.defaultProps = {}
