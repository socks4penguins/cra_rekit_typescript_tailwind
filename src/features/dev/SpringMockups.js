import React, { useRef, useState } from "react"
import { useSpring, animated, to } from "@react-spring/web"
import card2 from "../../images/mockup-card2.svg"
import content from "../../images/mockup-content.svg"
import bg2 from "../../images/mockup2-bg.svg"
import bg3 from "../../images/mockup3-bg.svg"
// import SpringGesture from "./SpringGesture"
// import PropTypes from 'prop-types';

export default function SpringMockups() {
  const [hover, setHover] = useState(false)
  const logoTarget = useRef(null)
  const bottom = useSpring({ bottom: hover ? "55%" : "50%" })
  const imageSize = useSpring({
    width: hover ? "48px" : "32px",
    height: hover ? "48px" : "32px",
  })

  const images = [
    {
      url: card2,
      background:
        "radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%)",
      width: "183px",
      height: "120px",
      top: "150px",
      left: "-37px",
    },
    {
      url: card2,
      background:
        "linear-gradient(192.64deg, rgb(67, 22, 219) 12.72%, rgb(144, 118, 231) 54.49%, rgb(162, 238, 255) 100.01%)",
      width: "183px",
      height: "120px",
      top: "150px",
      left: "176px",
    },
    {
      url: content,
      background: "rgba(23, 12, 61, 0.3)",
      width: "701px",
      height: "428px",
      top: "200px",
      left: "0px",
      backdropFilter: "blur(10px)",
    },
    {
      url: bg2,
      background: "rgba(23, 12, 61, 0.2)",
      width: "400px",
      height: "273px",
      top: "370px",
      left: "40px",
      backdropFilter: "blur(10px)",
    },
    {
      url: bg3,
      background: "rgba(23, 12, 61, 0.2)",
      width: "414px",
      height: "273px",
      top: "400px",
      left: "340px",
      backdropFilter: "blur(10px)",
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
        <img
          key={index}
          src={img.url}
          alt=""
          style={{
            transition: "all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s",
            position: "absolute",
            ...img,
            ...(hover ? {} : tilt),
          }}
        />
      ))}
    </div>
  )
}

SpringMockups.propTypes = {}
SpringMockups.defaultProps = {}
