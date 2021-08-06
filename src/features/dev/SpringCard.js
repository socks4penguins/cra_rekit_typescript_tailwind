import React, { useRef, useState } from "react"
import { useSpring, animated, to } from "@react-spring/web"
import pic from "../../images/pic.png"
import react_logo from "../../images/react.svg"
import SpringGesture from "./SpringGesture"
// import PropTypes from 'prop-types';

export default function SpringCard() {
  const [hover, setHover] = useState(false)
  const logoTarget = useRef(null)
  const bottom = useSpring({ bottom: hover ? "55%" : "50%" })

  return (
    <div
      className="dev-spring-card relative rounded-3xl flex mr-7"
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <SpringGesture
        classes={{ root: "w-full" }}
        // style={{ width: "300px", height: "300px" }}
        borderRadius="30px"
        mouseEnter={{ rotateX: 0, rotateY: 0, scale: 1.1 }}
      >
        <div id="mainGrow" className="p-5  flex w-full flex-col items-center">
          <div className="flex-1">
            {/* <img className="w-full h-full object-contain " src={pic} alt="" /> */}
          </div>
          <div className="flex-1 flex-col items-center text-white pt-3">
            <div className="text-xl font-bold">text here</div>
            <div className=" ">text here</div>
          </div>
          <div
            // style={hover ? { zoom: 1.2 } : { zoom: 1 }}
            ref={logoTarget}
            className="absolute top-5 right-5"
          >
            <img
              className="w-8 h-8 rounded-full p-1 bg-black object-contain "
              src={react_logo}
              alt=""
            />
          </div>
        </div>
      </SpringGesture>
      <animated.div
        style={bottom}
        className="absolute left-0 right-0 pointer-events-none mt-3"
      >
        <img className="w-full h-full object-contain " src={pic} alt="" />
      </animated.div>
    </div>
  )
}

SpringCard.propTypes = {}
SpringCard.defaultProps = {}
