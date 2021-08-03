import React, { useEffect } from 'react';

const Thumbnails = (props) => {

  useEffect(() => {
    if (props.list) setThumbnail(props.list[props.index]);
  });

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
