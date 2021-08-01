import React, {useContext, useState} from 'react';
import { ProductContext } from "../../../App.jsx";

const DescriptionText = () => {
  const [product, setProduct] = useContext(ProductContext)
  const [isLoading, setLoadingStatus] = useState(true)

  if(product.currentProduct.slogan) setLoadingStatus(false);

  return (
    <div id='description-text'>
      {isLoading ?
        <h3>{product.currentProduct.slogan}</h3> :
        <h3>Thinking of a slogan...</h3>
      }
      {isLoading ?
        <p>{product.currentProduct.description}</p> :
        <p>Fetching some juicy details...</p>
      }
    </div>
  )
}

export default DescriptionText;
