import React, {useContext, useState} from "react";
import Gallery from "./gallery/Gallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import Rating from "./Rating.jsx";
import {ProductContext} from '../../App.jsx';

const Overview = (props) => {
  const [product, setProduct] = useContext(ProductContext)
  const [currentStyle, setCurrentStyle] = useState(product.styles[0])

  return (
    <div id="overview-components">
      <Gallery />
      <div id="detail-components">
        <Rating />
        <ProductInfo id="info" />
        <StyleSelector id="styles" />
        <AddToCart id="cart" />
      </div>
    </div>
  );
};

export default Overview;
