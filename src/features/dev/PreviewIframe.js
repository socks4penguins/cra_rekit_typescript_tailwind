/* eslint-disable no-self-assign */
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import React, { useRef, useState } from "react";
// import UrbSelect from "../urb/UrbSelect";

// import PropTypes from 'prop-types';

export default function PreviewIframe(props) {
  // const [view, setView] = useState("page builder");
  const iframeRef = useRef(null)
  const { url } = props;
  return (
    <div className="dev-preview-iframe vertical layout fill">
      <div className="horizontal layout full-width">
      {/* <div className="horizontal layout">
        <UrbSelect
          data={["page builder", "menu builder"]}
          onChange={(view) => setView(view)}
          value={view}
        />
      </div> */}
        <Typography className="flex" variant="body1">URL : {url}</Typography>
        <IconButton onClick={e=>iframeRef.current.src=iframeRef.current.src}><Refresh /></IconButton>
      </div>
      <iframe ref={iframeRef} className="flex full-width" src={url} title="remote viewer" />
    </div>
  );
}

PreviewIframe.propTypes = {};
PreviewIframe.defaultProps = {};
