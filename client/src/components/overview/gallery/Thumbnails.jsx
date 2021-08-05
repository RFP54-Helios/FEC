import React, { useState } from 'react';

const Thumbnails = ({handleClick, index, thumbnail, galleryImageIndex }) => {
  const isMatchingThumbnail = () => {
    // if this is the first set, the focused thumbnail is accurate
    if (galleryImageIndex <= 6) {
      return index === galleryImageIndex;
      // if this is the second set, we need to offset the index by -7
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
