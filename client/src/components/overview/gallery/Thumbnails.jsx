import React, { useContext, useEffect } from "react";

const Thumbnails = (props) => {
  return (
    <button
      onClick={() => {
        props.handleClick(props.index);
      }}
      className="thumbnail"
      style={{backgroundImage: `url(${props.thumbnail})`}}
      aria-label="imageGalleryThumbnails"
    ></button>
  );
};

export default Thumbnails;
