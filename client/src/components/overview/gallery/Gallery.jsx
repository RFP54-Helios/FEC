import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails'

const Gallery = ({ currentStyle, setCurrentStyle }) => {
  const [currentImage, setCurrentImage] = useState({backgroundColor : 'grey'})
  const [currentGalleryImageIndex, setGalleryImageIndex] = useState(0)

  useEffect(() => {
    if (!currentStyle.photos.length) return;
    setCurrentImage({backgroundImage : `url(${currentStyle.photos[currentGalleryImageIndex].url})`, backgroundColor : 'black'});
  }, [currentStyle])

  const handleLeftArrowClick = () => {
    if (currentGalleryImageIndex - 1 < 0) return undefined;
    setGalleryImageIndex(currentGalleryImageIndex - 1)
  }

  const handleRightArrowClick = () => {
    let lastPhotoIndex = currentStyle.photos.length - 1;
    if (currentGalleryImageIndex + 1 > lastPhotoIndex) return undefined;
    setGalleryImageIndex(currentGalleryImageIndex + 1)
  }

  return (
    <div id='gallery' style={currentImage}>
      <span id='carousel-thumbnails'>
        {currentStyle.photos.map((photoUrls, i) => {
          return (
            <Thumbnails thumbnail={photoUrls.thumbnail_url} key={i} />
          )
        })}
      </span>
      <button id='expand'>[ ]</button>
      <Arrows id='arrows' handleLeftClick={handleLeftArrowClick} handleRightClick={handleRightArrowClick} />
    </div>
  );
};

export default Gallery;
