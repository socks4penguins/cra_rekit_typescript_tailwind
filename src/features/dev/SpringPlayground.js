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
          mouseEnter={{ rotateX: 0, rotateY: 0, scale: 1.1 }}
        />
        <div
          className="relative"
          style={{ width: "300px", height: "300px" }}
        >
          <SpringGesture
            classes={{ root: "absolute fill" }}
            borderRadius="30px"
            mouseEnter={{ rotateX: 0, rotateY: 0, scale: 1.1 }}
          >
            <div
              // className="fill"
              style={{
                backgroundImage:
                  "linear-gradient(209.21deg, rgb(22, 155, 173) 13.57%, rgb(0, 54, 135) 98.38%)",
                   borderRadius: "30px"
              }}
            />
          </SpringGesture>
          {/* <SpringGesture
            classes={{ root: "absolute fill" }}
            mouseEnter={{ rotateX: 0, rotateY: 0, scale: 1.1 }}
          >
            <img src="../../images/pic.png" alt="" className="h-"/>
          </SpringGesture> */}
        </div>
      </div>
    </div>
  )
}

SpringPlayground.propTypes = {}
SpringPlayground.defaultProps = {}
