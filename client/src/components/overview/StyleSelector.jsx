import React, { useContext } from "react";
import { ProductContext } from "../../App.jsx";

const StyleSelector = () => {
  const [product, setProduct] = useContext(ProductContext);
  return (
    <>
      <h3>STYLE ></h3>
      <span id="style-thumbnail-container">
        {product.styles.map((style) => (
          <img
            className="style-thumbnail"
            src={style.photos[0].thumbnail_url}
          ></img>
        ))}
      </span>
    </>
  );
};

export default StyleSelector;
