import React, { useContext, useState, useEffect } from "react";
import Gallery from "./gallery/Gallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import Rating from "./Rating.jsx";
import { ProductContext } from "../../App.jsx";

// consider using context here, because prop drilling is slow

const Overview = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [currentStyle, setCurrentStyle] = useState({ photos: [] });
  const [currentImage, setCurrentImage] = useState({backgroundColor : 'grey'})

  useEffect(() => {
    if (!product.styles.length) return;
    setCurrentStyle(product.styles[0]);
  }, [product]);

  useEffect(() => {
    if (!currentStyle.photos.length) return;
    setCurrentImage({backgroundImage : `url(${currentStyle.photos[0].thumbnail_url})`});
  }, [currentStyle])

  return (
    <div id="overview-components">
      <Gallery
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        style={currentImage} />
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
