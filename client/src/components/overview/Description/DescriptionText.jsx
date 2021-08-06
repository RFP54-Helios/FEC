import React, { useContext } from 'react';
import { ProductContext } from '../../../App.jsx';

const DescriptionText = () => {
  const [product, setProduct] = useContext(ProductContext);

  return (
    <div id="description-text">
      {product.currentProduct.slogan ? (
        <>
          <h3>{product.currentProduct.slogan}</h3>
          <br />
          <p>{product.currentProduct.description}</p>
        </>
      ) : (
        <>
          <h3>Thinking of a slogan...</h3>
          <br />
          <p>Dreaming of some details...</p>
        </>
      )}
    </div>
  );
};

export default DescriptionText;
