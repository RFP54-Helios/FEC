import React, {useContext} from 'react';
import { ProductContext } from "../../../App.jsx";

const ProductInfo = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  if (props.currentStyle.sale_price) {
    var price =
    <>
      <p id='on-sale'>${props.currentStyle.original_price}</p>
      <p id='sale-price'>${props.currentStyle.sale_price}</p>
    </>
  } else {
    var price = <p>${props.currentStyle.original_price}</p>
  }
  return(
    <div id='info-text'>
      <p>{product.currentProduct.category}</p>
      <h1>{product.currentProduct.name}</h1>
      <p>{price}</p>
      <img className='social' src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'></img>
    </div>
  )
}

export default ProductInfo;