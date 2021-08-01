import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from "../../App.jsx";
// import items from './sampleData.json';
import AddOutfits from './addOutfits.jsx';
import AddRelated from './addRelated.jsx';
import { getProduct, getFromApi } from '../../helperFunctions.js';


const Outfits = (props) => {
  //app level state
  const [product, setProduct] = useContext(ProductContext);

  //component level state

  const [relatedId, setRelatedId] = useState({
    ids: []
  })

  // const[productDetails, setProductDetails] = useState()
  useEffect(() => {
    getFromApi(`products/${product.product_id}/related`)
      .then(result => {
        setRelatedId({ ids: result })
      })
      .catch(err => {
        console.log(err);
      })
  }, [product.product_id])


  return (

    <div>

      <AddRelated ids={relatedId.ids} />
      <AddOutfits currentStyle={props.currentStyle} setCurrentStyle={props.setCurrentStyle} />
    </div>
  )
}


export default Outfits;
