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
  const [visibleThumbs, setVisibleThumbs] = useState([]);

  useEffect(() => {
    // if the API call in app has resolved:
    if (currentStyle.photos.length) {
      // update state with current photo when the index state changes
      if (currentStyle.photos[0].url) {
        setCurrentImage(currentStyle.photos[galleryImageIndex].url);
      }

      // set the initial list of thumbnails
      setVisibleThumbs();
      // and determine if the thumbnails are overflowing their container
      if (currentStyle.photos.length > 7) setHasThumbsOverflow(true);
    } else {
      return undefined;
    }

    // separate thumbnails into different lists of 7, to fit frame.
    var photoSets = currentStyle.photos.reduce((acc, cv, index) => {
      if (index % 7 === 0) {
        acc.push([]);
        acc[index / 7].push(cv);
      } else {
        acc[Math.floor(index / 7)].push(cv);
      }
      return acc;
    }, []);

    // determine which set to use based on current index
    if (galleryImageIndex <= 6) {
      setVisibleThumbs(photoSets[0]);
    } else if (galleryImageIndex > 6 && galleryImageIndex <= 13) {
      setVisibleThumbs(photoSets[1]);
    } else {
      setVisibleThumbs(photoSets[2]);
    }
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
          display: 'grid',
          minHeight: '0',
          gridTemplateColumns: '10px 100px auto 40px 10px',
          gridTemplateRows: '10px 30px 40% 50px 20% 20px',
          maxWidth: '100%',
          height: '100%',
        }}
        // onClick={() => toggleExpandedView(true)}
      >
        <>
          <span id="carousel-thumbnails">
            {visibleThumbs.map((photoUrls, i) => {
              return (
                <Thumbnails
                  handleClick={handleThumbnailClick}
                  thumbnail={photoUrls.thumbnail_url}
                  galleryImageIndex={galleryImageIndex}
                  visibleThumbs={visibleThumbs}
                  index={i}
                  key={i}
                />
              );
            })}
          </span>
          <button id="expand" onClick={() => toggleExpandedView(true)}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="expand"
              className="svg-inline--fa fa-expand fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"
              ></path>
            </svg>
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
