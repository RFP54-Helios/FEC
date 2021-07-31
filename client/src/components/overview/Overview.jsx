import React, { useContext, useState, useEffect } from 'react';
import Gallery from './gallery/Gallery.jsx';
import ProductInfo from './Panel/ProductInfo.jsx';
import StyleSelector from './Panel/StyleSelector.jsx';
import AddToCart from './Panel/AddToCart.jsx';
import Rating from './Panel/Rating.jsx';
import DescriptionText from './Description/DescriptionText.jsx';
import Features from './Description/Features.jsx';
import { ProductContext } from '../../App.jsx';

// consider using context here, because prop drilling is slow

const Overview = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [currentStyle, setCurrentStyle] = useState({ photos: [] });

  useEffect(() => {
    if (!product.styles.length) return;
    setCurrentStyle(product.styles[0]);
  }, [product]);

  return (
    <>
      <div id='overview-components'>
        <Gallery
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle} />
        <div id='detail-components'>
          <Rating />
          <ProductInfo id='info'
            currentStyle={currentStyle}/>
          <StyleSelector id='styles'
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}/>
          <AddToCart />
        </div>
      </div>
      <div id='product-description'>
        <DescriptionText />
        <Features />
      </div>
    </>
  );
};

export default Overview;
