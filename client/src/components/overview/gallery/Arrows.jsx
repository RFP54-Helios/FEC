import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../App.jsx';

const Arrows = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [isLeftmost, setIsLeftmost] = useState(true);
  const [isRightmost, setIsRighmost] = useState(false);

  useEffect(() => {
    // use state to conditionally render carousel arrows
    if (props.imageIndex === 0) {
      // if the current index is 0, it's the first image
      setIsLeftmost(true);
      setIsRighmost(false);
    } else if (props.imageIndex === props.lastIndex) {
      // if the current index is the last index, it's the last image
      setIsLeftmost(false);
      setIsRighmost(true);
    } else {
      // if neither is true, the current image is not at an edge
      setIsLeftmost(false);
      setIsRighmost(false);
    }
  });

  return (
    <div id="arrows" aria-label="img_nav">
      {!isLeftmost ? (
        <button
          className="arrow"
          id="left-arrow"
          aria-label="previous"
          onClick={(e) => {
            e.stopPropagation();
            props.handleLeftClick();
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-left"
            class="svg-inline--fa fa-angle-left fa-w-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="orange"
              d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
            ></path>
          </svg>
        </button>
      ) : null}
      {!isRightmost ? (
        <button
          className="arrow"
          id="right-arrow"
          aria-label="next"
          onClick={(e) => {
            e.stopPropagation();
            props.handleRightClick();
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            class="svg-inline--fa fa-angle-right fa-w-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="orange"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            ></path>
          </svg>
        </button>
      ) : null}
    </div>
  );
};

export default Arrows;
