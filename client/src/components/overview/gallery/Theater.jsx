import React, { useState, useEffect } from 'react';
import Arrows from './Arrows.jsx';
import addZoom from './addZoom';

const Theater = (props) => {
  let style = {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="modal">
      <div id="modal-content">
        <div
          style={style}
          id="zoom-img"
          onClick={(e) => addZoom('zoom-img')}
        ></div>
        <button
          id="modal-close"
          onClick={() => props.toggleExpandedView(false)}
        >
          Close
        </button>
        <Arrows
          handleLeftClick={props.handleLeftClick}
          handleRightClick={props.handleRightClick}
          imageIndex={props.imageIndex}
          lastIndex={props.currentStyle.photos.length - 1}
        />
      </div>
    </div>
  );
};

export default Theater;
