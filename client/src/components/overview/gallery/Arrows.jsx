import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../App.jsx";

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
          onClick={() => {
            props.handleLeftClick();
          }}
        >
          &lt;
        </button>
      ) : null}
      {!isRightmost ? (
        <button
          className="arrow"
          id="right-arrow"
          aria-label="next"
          onClick={() => {
            props.handleRightClick();
          }}
        >
          &gt;
        </button>
      ) : null}
    </div>
  );
};

export default Arrows;
