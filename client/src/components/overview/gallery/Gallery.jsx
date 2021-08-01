import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails';
import Theater from './Theater';

const Gallery = ({ currentStyle }) => {
  const [currentImage, setCurrentImage] = useState({ backgroundColor: 'grey' });
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  useEffect(() => {
    if (!currentStyle.photos.length) return;
    setCurrentImage({
      backgroundImage: `url(${currentStyle.photos[galleryImageIndex].url})`,
    });
  }, [currentStyle, galleryImageIndex]);

  const handleLeftArrowClick = () => {
    setGalleryImageIndex(galleryImageIndex - 1);
  };

  const handleRightArrowClick = () => {
    setGalleryImageIndex(galleryImageIndex + 1);
  };

  const handleThumbnailClick = (key) => {
    setGalleryImageIndex(key);
  };

  return (
    <>
      <div id="gallery" style={currentImage}>
        <span id="carousel-thumbnails">
          {currentStyle.photos.map((photoUrls, i) => {
            return (
              <Thumbnails
                handleClick={handleThumbnailClick}
                thumbnail={photoUrls.thumbnail_url}
                index={i}
                key={i}
              />
            );
          })}
        </span>
        <button id="expand">[ ]</button>
        <Arrows
          id="arrows"
          handleLeftClick={handleLeftArrowClick}
          handleRightClick={handleRightArrowClick}
          imageIndex={galleryImageIndex}
          lastIndex={currentStyle.photos.length - 1}
        />
      </div>
      {expandedView ? <Theater /> : null}
    </>
  );
};

export default Gallery;
