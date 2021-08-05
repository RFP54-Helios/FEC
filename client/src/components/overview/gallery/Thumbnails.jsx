import React, { useState } from 'react';

const Thumbnails = ({ index, thumbnail, galleryImageIndex }) => {
  // logic to work around the map index starting from 0 on new thumbnail sets
  // since each set is a new array, map begins counting at 0 despite being index 7, etc
  const isMatchingThumbnail = () => {
    // if this is the first set, the focused thumbnail is accurate
    if (galleryImageIndex <= 6) {
      return index === galleryImageIndex;
      // if this is the second set, we need to offset the index by -7
    } else if (galleryImageIndex >= 7 && galleryImageIndex <= 13) {
      return index === galleryImageIndex - 7;
      // same, but 14 for this case. > 21 thumbnails is unlikely
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
