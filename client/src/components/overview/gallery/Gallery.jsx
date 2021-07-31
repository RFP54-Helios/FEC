import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails'

const Gallery = ({ currentStyle, setCurrentStyle }) => {
  const [currentImage, setCurrentImage] = useState({backgroundColor : 'grey'})
  const [currentGalleryImageIndex, setGalleryImageIndex] = useState(0)

  useEffect(() => {
    if (!currentStyle.photos.length) return;
    setCurrentImage({backgroundImage : `url(${currentStyle.photos[currentGalleryImageIndex].url})`, backgroundColor : 'black'});
  }, [currentStyle, currentGalleryImageIndex])

  const handleLeftArrowClick = () => {
    setGalleryImageIndex(currentGalleryImageIndex - 1)
  }

  const handleRightArrowClick = () => {
    setGalleryImageIndex(currentGalleryImageIndex + 1)
  }

  const handleThumbnailClick = (key) => {
    setGalleryImageIndex(key);
  }


  return (
    <div id='gallery' style={currentImage}>
      <span id='carousel-thumbnails'>
        {currentStyle.photos.map((photoUrls, i) => {
          return (
            <Thumbnails handleClick={handleThumbnailClick} thumbnail={photoUrls.thumbnail_url} index={i} key={i} />
          )
        })}
      </span>
      <button id='expand'>[ ]</button>
      <Arrows id='arrows' handleLeftClick={handleLeftArrowClick} handleRightClick={handleRightArrowClick} imageIndex={currentGalleryImageIndex} lastIndex={currentStyle.photos.length - 1} />
    </div>
  );
};

export default Gallery;
