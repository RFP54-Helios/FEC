import React, {useContext, useState, useEffect} from 'react';
import { ProductContext } from "../../../App.jsx";

const Features = () => {
  const [product, setProduct] = useContext(ProductContext);
  const [features, setFeatures] = useState([])

  useEffect(() => {
    // is the API call done yet?
    // if not, return
    if (!product.currentProduct.features) return undefined;
    // if so, update state!
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
