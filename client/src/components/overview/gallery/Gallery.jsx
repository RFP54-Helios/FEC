import React from 'react';
import Thumbnails from './Thumbnails';
import Arrows from './Arrows';

const Gallery = () => {
  return(
    <div id='gallery'>
      <Thumbnails id='thumbnails'/>
      <button id='expand'>[ ]</button>
      <Arrows id='arrows'/>
    </div>
  )
}

export default Gallery;