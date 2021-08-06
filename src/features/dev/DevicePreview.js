import React, { useEffect, useRef, useState } from "react";
import SanityMobilePreview from "sanity-mobile-preview";
// import Preview from "./Preview";

// import PropTypes from 'prop-types';

export default function DevicePreview({ zoomToFit, device, landscape }) {
  const previewRef = useRef();
  const [zoomed, setZoomed] = useState(false);
  const containerHeight = previewRef.current && previewRef.current.offsetHeight;
  const menuHeight =
    previewRef.current && previewRef.current.firstChild.firstChild.offsetHeight;
  const deviceHeight =
    previewRef.current &&
    previewRef.current.firstChild.children[1].offsetHeight;
  const zoomNeeded = (containerHeight - menuHeight + 8) / deviceHeight;

  useEffect(() => {
    if (zoomToFit && !zoomed && zoomNeeded) {
      if (
        previewRef.current &&
        previewRef.current.firstChild &&
        previewRef.current.firstChild.children[1]
      ) {
        previewRef.current.firstChild.children[0].children[1].style.display =
          "none";
        previewRef.current.firstChild.children[0].children[0].style.margin =
          "3px";
        previewRef.current.firstChild.children[0].children[0].style.width =
          "120px";
        previewRef.current.firstChild.children[0].children[0].children[0].style.width =
          "107px";
        previewRef.current.firstChild.children[0].children[0].children[0].style.height =
          "18px";
        previewRef.current.firstChild.children[0].children[0].children[0].style.padding =
          "3px";
        previewRef.current.firstChild.children[0].children[2].children[0].style.padding =
          "3px";
        previewRef.current.firstChild.children[0].children[2].children[0].style.margin =
          "3px";
        previewRef.current.firstChild.children[0].children[2].children[0].style.width =
          "54px";
        previewRef.current.firstChild.children[0].children[2].children[0].style.height =
          "26px";
        previewRef.current.firstChild.children[1].style.zoom = zoomNeeded;
        setZoomed(true);
      }
    }
  }, [zoomNeeded, zoomToFit, zoomed]);

  console.log({ previewRef, zoomNeeded });

  return (
    <div className="dev-device-preview" ref={previewRef}>
      <SanityMobilePreview
        style={{ display: zoomed ? "block" : "none" }}
        preSelectedDevice={"ipad"}
        preSelectedColor={"black"}
        allowedDevices={["ipad", "iphone-x"]}
        preSelectedLandscape={landscape}
      >
        {/* <Preview /> */}
      </SanityMobilePreview>
    </div>
  );
}

DevicePreview.propTypes = {};
DevicePreview.defaultProps = {};
