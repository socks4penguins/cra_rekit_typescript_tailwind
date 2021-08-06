import React from 'react';
import SpringAnimator from './SpringAnimator';
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
      </div>
    </div>
  )
};

SpringPlayground.propTypes = {};
SpringPlayground.defaultProps = {};
