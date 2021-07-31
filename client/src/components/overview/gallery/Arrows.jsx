import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../App.jsx";

const Arrows = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [isLeftmost, setIsLeftmost] = useState(true)
  const [isRightmost, setIsRighmost] = useState(false)

  useEffect(() => {
    if (props.imageIndex === 0) {
      setIsLeftmost(true);
      setIsRighmost(false);
    } else if (props.imageIndex === props.lastIndex) {
      setIsLeftmost(false);
      setIsRighmost(true);
    }  else {
      setIsLeftmost(false)
      setIsRighmost(false)
    }
  })

  return (
    <div id="arrows">
      {!isLeftmost ? (
        <button
          className="arrow"
          id="left-arrow"
          onClick={() => {
            props.handleLeftClick();
          }}
        >
          ‹
        </button>
      ) : null}
      {!isRightmost ? (
        <button
          className="arrow"
          id="right-arrow"
          onClick={() => {
            props.handleRightClick();
          }}
        >
          ›
        </button>
      ) : null}
    </div>
  );
};

export default Arrows;
