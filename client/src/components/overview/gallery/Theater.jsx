import React, { useState, useEffect } from 'react';
import Arrows from './Arrows.jsx';

const Theater = (props) => {
  const [zoom, toggleZoom] = useState(false);
  const [scale, setScale] = useState('scale(1)');
  const [zoomCursor, setZoomCursor] = useState('zoom-in');

  let styling = {
    backgroundPosition: 'center',
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    transform: scale,
    cursor: zoomCursor,
  };

  useEffect(() => {
    if (zoom) {
      setScale('scale(2.5)');
      setZoomCursor('zoom-out');
    } else {
      setScale('scale(1)');
      setZoomCursor('zoom-in');
    }
  }, [zoom]);

  return (
    <div className="modal" onClick={() => props.toggleExpandedView(false)}>
      <div id="modal-content">
        <Arrows
          handleLeftClick={props.handleLeftClick}
          handleRightClick={props.handleRightClick}
          imageIndex={props.imageIndex}
          lastIndex={props.currentStyle.photos.length - 1}
        />
        <div
          style={styling}
          id="modal-img"
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom(!zoom);
          }}
        ></div>
      </div>
    </div>
  );
};

export default Theater;
