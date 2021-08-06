import React from "react"
// import ReactPlayer from "react-player/lazy"
import isMobile from "is-mobile"
import { Typography } from "@material-ui/core"

// import PropTypes from 'prop-types';

const videoURL = "https://www.youtube.com/watch?v=c1jJyiKB_bY"
const audioURL =
  "https://firebasestorage.googleapis.com/v0/b/messaging-test-3dd86.appspot.com/o/y2mate.com%20-%20Cant%20Stop%20The%20Feeling%20Official%20Movie%20Clip%20%20TROLLS.mp3?alt=media&token=3ec74948-1c45-4a15-b440-ece4facda03a"

const mobile = isMobile()

export default function DefaultContent() {
  return (
    <div className="home-default-content flex vertical layout">
      <Typography variant="h3">Welcome to URB!!</Typography>
      {/* <ReactPlayer
        className="flex"
        height="inherit"
        url={mobile ? audioURL : videoURL}
        controls
      /> */}
    </div>
  )
}

DefaultContent.propTypes = {}
DefaultContent.defaultProps = {}
