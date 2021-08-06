import React, { useRef, useState } from "react"
// import { useSpring, animated } from "@react-spring/web"

import card2 from "../../images/mockup-card2.svg"
import content from "../../images/mockup-content.svg"
import bg2 from "../../images/mockup2-bg.svg"
import bg3 from "../../images/mockup3-bg.svg"
// import SpringGesture from "./SpringGesture"
// import PropTypes from 'prop-types';

export default function SpringMockups() {
  const [hover, setHover] = useState(false)
  // const logoTarget = useRef(null)
  // const top = useSpring({ top: hover ? "400px": "370px"   })
  // const imageSize = useSpring({
  //   width: hover ? "48px" : "32px",
  //   height: hover ? "48px" : "32px",
  // })

  const images = [
    {
      url: card2,
      style: {
        background:
          "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%)",
        width: "183px",
        height: "120px",
        top: "150px",
        left: "-37px",
      },
      // hoverStyle: useSpring({ top: "110px", left: "-40px" }),
      hoverStyle: { top: "110px", left: "-40px" },
    },
    {
      url: card2,
      style: {
        background:
          "linear-gradient(192.64deg, rgb(67, 22, 219) 12.72%, rgb(144, 118, 231) 54.49%, rgb(162, 238, 255) 100.01%)",
        width: "183px",
        height: "120px",
        top: "150px",
        left: "176px",
      },
      hoverStyle: { top: "110px", left: "190px" },
    },
    {
      url: content,
      style: {
        background: "rgba(23, 12, 61, 0.3)",
        width: "701px",
        height: "428px",
        top: "200px",
        left: "0px",
        backdropFilter: "blur(10px)",
      },
      hoverStyle: {},
    },
    {
      url: bg2,
      style: {
        background: "rgba(23, 12, 61, 0.2)",
        width: "400px",
        height: "273px",
        top: "370px",
        left: "40px",
        backdropFilter: "blur(10px)",
      },
      hoverStyle: { top: "400px", left: "-40px" },
    },
    {
      url: bg3,
      style: {
        background: "rgba(23, 12, 61, 0.2)",
        width: "414px",
        height: "273px",
        top: "400px",
        left: "340px",
        backdropFilter: "blur(10px)",
      },
      hoverStyle: { left: "370px" },
    },
  ]

  const tilt = {
    transform: "rotateY(-20deg) rotateX(20deg)",
  }

  return (
    <div
      className="dev-spring-mockups fill relative "
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      {images.map((img, index) => (
        // false ? (
        //   <animated.img
        //     key={index}
        //     src={img.url}
        //     alt=""
        //     style={{
        //       transition: "all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s",
        //       position: "absolute",
        //       ...img.style,
        //       ...(!hover ? {} : tilt),
        //       // ...img.hoverStyle,
        //     }}
        //   />
        // ) :
        <img
          key={index}
          src={img.url}
          alt=""
          style={{
            transition: "all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s",
            position: "absolute",
            ...img.style,
            ...(hover ? img.hoverStyle : tilt),
          }}
        />
      ))}
    </div>
  )
}

SpringMockups.propTypes = {}
SpringMockups.defaultProps = {}
