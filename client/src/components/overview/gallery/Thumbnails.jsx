import React, {useContext} from "react";
import {ProductContext} from '../../../App.jsx';

const Thumbnails = (props) => {
  const [product, setProduct] = useContext(ProductContext)
  return (
    <div id='thumbnails'>
      <h3>Thumbnails</h3>
    </div>
  )
}

export default Thumbnails;