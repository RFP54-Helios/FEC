import React, { useContext } from 'react';
import { ProductContext } from '../../../App.jsx';

const ProductInfo = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  // check if there's a sales price for this item and conditionally render text
  if (props.currentStyle.sale_price) {
    var price = (
      <>
        <p id="on-sale">${props.currentStyle.original_price}</p>
        <p id="sale-price">${props.currentStyle.sale_price}</p>
      </>
    );
  } else {
    var price = <p>${props.currentStyle.original_price}</p>;
  }

  return (
    <div id="info-text">
      <p>{product.currentProduct.category}</p>
      <h1>{product.currentProduct.name}</h1>
      {price}
      <div id="social-icons">
        <img
          className="social"
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
        ></img>
        <img
          className="social"
          src="https://seeklogo.com/images/T/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png"
        ></img>
        <img
          className="social"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c52e.png"
        ></img>
      </div>
    </div>
  );
};

export default ProductInfo;
