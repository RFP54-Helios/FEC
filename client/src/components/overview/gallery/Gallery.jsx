import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails';
import Theater from './Theater';

const Gallery = ({ expandedView, toggleExpandedView, currentStyle }) => {
  const [currentImage, setCurrentImage] = useState(
    'https://i.gifer.com/YCZH.gif'
  );
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  useEffect(() => {
    // update state if the API call has resolved
    if (!currentStyle.photos.length) return;
    setCurrentImage(currentStyle.photos[galleryImageIndex].url);
  }, [currentStyle, galleryImageIndex]);

  // decrement image index in array
  const handleLeftArrowClick = () => {
    setGalleryImageIndex(galleryImageIndex - 1);
  };

  // increment image index in array
  const handleRightArrowClick = () => {
    setGalleryImageIndex(galleryImageIndex + 1);
  };

  // move to photos index where thumbnail resides
  const handleThumbnailClick = (key) => {
    setGalleryImageIndex(key);
  };

  return (
    <>
      <div
        id="gallery"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        // onClick={() => toggleExpandedView(true)}
      >
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
        <button id="expand" onClick={() => toggleExpandedView(true)}>
          [ ]
        </button>
        <Arrows
          id="arrows"
          handleLeftClick={handleLeftArrowClick}
          handleRightClick={handleRightArrowClick}
          imageIndex={galleryImageIndex}
          lastIndex={currentStyle.photos.length - 1}
        />
      </div>
      {expandedView ? (
        <Theater
          image={currentStyle.photos[galleryImageIndex].url}
          currentStyle={currentStyle}
          handleLeftClick={handleLeftArrowClick}
          handleRightClick={handleRightArrowClick}
          toggleExpandedView={toggleExpandedView}
          imageIndex={galleryImageIndex}
          lastIndex={currentStyle.photos.length - 1}
        />
      ) : null}
    </>
  );
};

export default Gallery;
