import React, { useState } from 'react';
import Gallery from './gallery/Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
require('dotenv').config();

const Overview = () => {
  return (
    <div id='overview-components'>
      <Gallery id='gallery' />
      <ProductInfo id='info' />
      <StyleSelector id='styles' />
      <AddToCart id='cart' />
    </div>
  );
};

export default Overview;
