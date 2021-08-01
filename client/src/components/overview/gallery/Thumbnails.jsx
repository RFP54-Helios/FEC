import React, { useContext, useEffect } from "react";

const Thumbnails = (props) => {
  return (
    <img
      onClick={() => {
        props.handleClick(props.index);
      }}
      className="thumbnail"
      src={props.thumbnail}
      aria-label="imageGalleryThumbnails"
    ></img>
  );
};

export default Thumbnails;
