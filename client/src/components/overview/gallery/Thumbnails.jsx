import React, { useState } from 'react';

const Thumbnails = (props) => {

  const isMatchingThumbnail = () => props.index === props.galleryImageIndex;

  return isMatchingThumbnail() ? (
    <button
      onClick={() => {
        props.handleClick(props.index);
      }}
      className="thumbnail"
      id='focus-thumbnail'
      style={{ backgroundImage: `url(${props.thumbnail})` }}
      aria-label="imageGalleryThumbnails"
    ></button>
  ) : (
    <button
      onClick={() => {
        props.handleClick(props.index);
      }}
      className="thumbnail"
      style={{ backgroundImage: `url(${props.thumbnail})` }}
      aria-label="imageGalleryThumbnails"
    ></button>
  );
};

export default Thumbnails;
