import React, { useState } from 'react';

const Thumbnails = ({handleClick, index, thumbnail, galleryImageIndex }) => {
  const isMatchingThumbnail = () => {
    if (galleryImageIndex <= 6) {
      return index === galleryImageIndex;
    } else if (galleryImageIndex >= 7 && galleryImageIndex <= 13) {
      index += 7;
      return index === galleryImageIndex;
    } else {
      index += 14;
      return index === galleryImageIndex;
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
