import React, { useState, useEffect } from 'react';
import Arrows from './Arrows.jsx';
import addZoom from './addZoom';

const Theater = (props) => {
  let style = {
    height: '90%',
    width: '90%',
    margin: 'auto',
    marginTop: '35px',
    backgroundColor: 'black',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="modal">
      <div style={style} id="zoom-img" onClick={(e) => addZoom('zoom-img')}>
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
