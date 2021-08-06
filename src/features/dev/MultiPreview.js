import React from "react";
import "sanity-mobile-preview/dist/index.css?raw";
import DevicePreview from "./DevicePreview";
// import PropTypes from 'prop-types';

export default function MultiPreview() {
  return (
    <div className="dev-multi-preview fill">
      <div className="horizontal layout full-height">
        <DevicePreview zoomToFit device="ipad" landscape />
        <DevicePreview zoomToFit device="iphone-x" />

        {/* <Preview device="iphone-portrait"/> */}
      </div>
    </div>
  );
}

MultiPreview.propTypes = {};
MultiPreview.defaultProps = {};
