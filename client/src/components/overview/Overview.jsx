import React, { useContext, useState, useEffect } from 'react';
import Gallery from './gallery/Gallery.jsx';
import ProductInfo from './Panel/ProductInfo.jsx';
import StyleSelector from './Panel/StyleSelector.jsx';
import AddToCart from './Panel/AddToCart.jsx';
import Rating from './Panel/Rating.jsx';
import DescriptionText from './Description/DescriptionText.jsx';
import Features from './Description/Features.jsx';
import { ProductContext } from '../../App.jsx';

const Overview = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [expandedView, toggleExpandedView] = useState(false);

  useEffect(() => {
    if (!product.styles.length) return;
    props.setCurrentStyle(product.styles[0]);
  }, [product]);

  return (
    <>
      <div id="overview-components">
        <Gallery
          currentStyle={props.currentStyle}
          onClick={() => toggleExpandedView(!expandedView)}
        />
        <div id="detail-components">
          <Rating ratings={product.ratings} />
          <ProductInfo id="info" currentStyle={props.currentStyle} />
          <StyleSelector
            id="styles"
            currentStyle={props.currentStyle}
            setCurrentStyle={props.setCurrentStyle}
          />
          <AddToCart />
        </div>
      </div>
      <div id="product-description">
        <DescriptionText />
        <Features />
      </div>
    </>
  );
};

export default Overview;
