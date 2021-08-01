import React, {useContext, useState, useEffect} from 'react';
import { ProductContext } from "../../../App.jsx";

const Features = () => {
  const [product, setProduct] = useContext(ProductContext);
  const [features, setFeatures] = useState([])

  useEffect(() => {
    if (!product.currentProduct.features) return undefined;
    setFeatures(product.currentProduct.features)
  })
  return (
    <ul id='features'>
      {features.map((feature, index) => (
        <li key={index}>{feature.feature}: {feature.value}</li>
      ))}
    </ul>
  )
}

export default Features;
