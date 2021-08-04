import React, { useState, useEffect } from 'react';
import Arrows from './Arrows';
import Thumbnails from './Thumbnails';
import Theater from './Theater';

const Gallery = ({ expandedView, toggleExpandedView, currentStyle }) => {
  const [currentImage, setCurrentImage] = useState(
    'https://i.gifer.com/YCZH.gif'
  );
  const [hasThumbsOverflow, setHasThumbsOverflow] = useState(false);

  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  useEffect(() => {
    // update state if the API call has resolved
    if (!currentStyle.photos.length) return;
    setCurrentImage(currentStyle.photos[galleryImageIndex].url);
    if (currentStyle.photos.length > 7) setHasThumbsOverflow(true);
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
          position: 'relative',
          backgroundImage: `url(${currentImage})`,
          objectFit: 'contain',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        // onClick={() => toggleExpandedView(true)}
      >
        <>
          <span id="carousel-thumbnails">
            {currentStyle.photos.map((photoUrls, i) => {
              return (
                <Thumbnails
                  handleClick={handleThumbnailClick}
                  thumbnail={photoUrls.thumbnail_url}
                  galleryImageIndex={galleryImageIndex}
                  listLength={currentStyle.photos.length}
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
          {hasThumbsOverflow ? (
            <button id="scroll-down" onClick={() => {}}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                class="svg-inline--fa fa-angle-down fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="orange"
                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                ></path>
              </svg>
            </button>
          ) : null}
        </>
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
