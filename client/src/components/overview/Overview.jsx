import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from './gallery/Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import Rating from './Rating.jsx';

const Overview = (props) => {
  const [currentProduct, setCurrentProduct] = useState(props.products[0])
  const [currentStyle, setCurrentStyle] = useState({})

  return (
    <div id='overview-components'>
      <Gallery id='gallery' />
      <div id='detail-components'>
        <Rating />
        <ProductInfo id='info' products={props.products}/>
        <StyleSelector id='styles' />
        <AddToCart id='cart' />
      </div>
    </div>
  );
};

export default Overview;
