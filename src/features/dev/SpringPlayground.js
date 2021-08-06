import React from "react"
import SpringAnimator from "./SpringAnimator"
import SpringGesture from "./SpringGesture"
// import PropTypes from 'prop-types';

export default function SpringPlayground() {
  return (
    <div className="dev-spring-playground fit flex flex-row">
      <div className="vertical layout flex bg-blue-500">
        <div className="p-4 flex flex-row"></div>
      </div>
      <div className="vertical layout flex center center-justified">
        <SpringAnimator
          // initial={{
          //   rotateX: 0,
          //   rotateY: 0,
          //   rotateZ: 0,
          //   scale: 1,
          //   zoom: 0,
          //   x: 0,
          //   y: 0,
          //   config: { mass: 5, tension: 350, friction: 40 },
          // }}
          // mouseLeave={{ rotateX: 0, rotateY: 0, scale: 1 }}
          mouseEnter={{ rotateX: 0, rotateY: 0, scale: 2.1 }}
        />

        <SpringGesture mouseEnter={{ rotateX: 0, rotateY: 0, scale: 2.1 }}>
          <div
            className="fill"
            style={{ boxShadow: "#1d5192 0px 20px 80px 0px" }}
          />
        </SpringGesture>
        <SpringGesture mouseEnter={{ rotateX: 0, rotateY: 0, scale: 2.1 }}>
          <img
            src="https://drscdn.500px.org/photo/126979479/w%3D440_h%3D440/v2?webp=true&v=2&sig=09ea71b0ddb91e24a59cecfb79a0189a2ab575d10372d3e8d3258e38f97a6a49"
            alt=""
          />
        </SpringGesture>
      </div>
    </div>
  )
}

SpringPlayground.propTypes = {}
SpringPlayground.defaultProps = {}
