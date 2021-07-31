import React, { lazy, Suspense } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails'

const Gallery = ({ currentStyle, setCurrentStyle }) => {
  return (
    <div id='gallery'>
      <span id='carousel-thumbnails'>
        {currentStyle.photos.map(photoUrls => {
          return (
            <Thumbnails thumbnail={photoUrls.thumbnail_url} />
          )
        })}
      </span>
      <button id='expand'>[ ]</button>
      <Arrows id='arrows' />
    </div>
  );
};

export default Gallery;
