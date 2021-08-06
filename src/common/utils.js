import { useEffect, useState } from "react";
import urbComponents from "../data/urbComponents";
import materialUiCoreComponents from "../data/materialUiCoreComponents";
import materialUiLabComponents from "../data/materialUiLabComponents";
import materialUiIcons from "../data/materialUiIcons";

export function makeImports(code) {
  const elements = code.match(/<[a-zA-Z]+/g);
  // console.log({ elements });
  var out = "";
  var urbComponentsObj = {},
    coreComponentsObj = {},
    labComponentsObj = {},
    iconsObj = {};
  elements &&
    elements.forEach((element) => {
      const name = element.slice(1, element.length);
      if (urbComponents.indexOf(name) > -1) urbComponentsObj[name] = true;
      else if (materialUiCoreComponents.indexOf(name) > -1)
        coreComponentsObj[name] = true;
      else if (materialUiLabComponents.indexOf(name) > -1)
        labComponentsObj[name] = true;
      else if (materialUiIcons.indexOf(name) > -1) iconsObj[name] = true;
    });

  Object.keys(urbComponentsObj).forEach((name) => {
    out += `import ${name} from "../features/urb/${name}"\n`;
  });
  if (Object.keys(coreComponentsObj).length > 0)
    out += `import {${Object.keys(coreComponentsObj).join(
      ", "
    )}} from "@material-ui/core"\n`;
  if (Object.keys(labComponentsObj).length > 0)
    out += `import {${Object.keys(labComponentsObj).join(
      ", "
    )}} from "@material-ui/lab"\n`;
  if (Object.keys(iconsObj).length > 0)
    out += `import {${Object.keys(iconsObj).join(
      ", "
    )}} from "@material-ui/icons"\n`;
  return out;
}

export function gitpodWebsocketHost(port) {
  return window.location.hostname.includes(".gitpod.io")
    ? "wss://" +
        port +
        "-" +
        window.location.hostname
          .split("-")
          .slice(1, window.location.hostname.split("-").length)
          .join("-")
    : "wss://" + window.location.hostname;
}

// export function ws2files({ port, onMessage }) {
//   var Socket = new WebSocket(gitpodWebsocketHost(port));
//   Socket.onmessage = (e) => {
//     onMessage && onMessage(e.data);
//   };
// }

// export const useOnScreen = function useOnScreen(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       console.log({ entry });
//       setIntersecting(entry.isIntersecting);
//     });
//     observer.observe(ref.current);
//     // Remove the observer as soon as the component is unmounted
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// };

// export function isScrolledIntoView(windowSize, el) {
//   if (!el || !el.current) return null;
//   var rect = el.current.getBoundingClientRect();
//   var elemTop = rect.top;
//   var elemBottom = rect.bottom;

//   // Only completely visible elements return true:
//   var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
//   // Partially visible elements return true:
//   //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//   return isVisible;
// }

export function usePosition(el) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({});
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const rect = el.current && el.current.getBoundingClientRect();
      setWindowSize({
        // width: window.innerWidth,
        // height: window.innerHeight,
        ...(rect
          ? {
              overflowX: rect.left < 0 || rect.right > window.innerWidth,
              overflowY: rect.top < 0 || rect.bottom > window.innerHeight,
            }
          : {}),
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [el]); // Empty array ensures that effect is only run on mount
  return windowSize;
}
