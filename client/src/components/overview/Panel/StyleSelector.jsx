import React, { useContext } from 'react';
import { ProductContext } from '../../../App.jsx';

const StyleSelector = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  // pass the index of the chosen style and change state at the overview level
  const handleStyleSelect = (index) => {
    props.setCurrentStyle(product.styles[index]);
  };

  return (
    <>
      <div id="style-text" aria-label="styleCollectionThumbnails">
        <h3>STYLE ></h3>
        <p>{props.currentStyle.name}</p>
      </div>
      <span id="style-thumbnail-container">
        {product.styles.map((style, i) => (
          <img
            className="style-thumbnail"
            src={style.photos[0].thumbnail_url}
            key={i}
            index={i}
            onClick={() => {
              handleStyleSelect(i);
            }}
          ></img>
        ))}
      </span>
    </>
  );
};

export default StyleSelector;
