import React, {useContext} from 'react';
import { ProductContext } from "../../../App.jsx";

const DescriptionText = () => {
  const [product, setProduct] = useContext(ProductContext);
  return (
    <div id='description-text'>
      <h3>{product.currentProduct.slogan}</h3>
      <p>{product.currentProduct.description}</p>
    </div>
  )
}

export default DescriptionText;
