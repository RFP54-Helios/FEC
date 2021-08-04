import React, { useState } from 'react';

const Thumbnails = ({ index, thumbnail, galleryImageIndex }) => {
  const isMatchingThumbnail = () => {
    if (galleryImageIndex <= 6) {
      return index === galleryImageIndex;
    } else if (galleryImageIndex >= 7 && galleryImageIndex <= 13) {
      return index === galleryImageIndex - 7;
    } else {
      return index === galleryImageIndex - 14;
    }
  };

  return isMatchingThumbnail() ? (
    <button
      onClick={() => {
        handleClick(index);
      }}
      className="thumbnail"
      id="focus-thumbnail"
      style={{ backgroundImage: `url(${thumbnail})` }}
      aria-label="imageGalleryThumbnails"
    ></button>
  ) : (
    <button
      onClick={() => {
        handleClick(index);
      }}
      className="thumbnail"
      style={{ backgroundImage: `url(${thumbnail})` }}
      aria-label="imageGalleryThumbnails"
    ></button>
  );
};

export default Thumbnails;
