import React, { useState, useContext, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from "../../App.jsx";
// import items from './sampleData.json';
import AddOutfits from './AddOutfits.jsx';
import AddRelated from './AddRelated.jsx';
import { getProduct, getFromApi } from '../../helperFunctions.js';


const Outfits = () => {
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
    setRelatedId({ids: result})
  })
  .catch(err => {
    console.log(err);
  })
},[product.product_id])


  //  getFromApi(`products/${product.product_id}/related`)
  // .then(result => {
  //   result.map(product => {
  //     getProduct(product)
  //     .then(res => {
  //       setProductDetails({productDetails: res})
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   })
  // })
  // .catch(err => {
  //   console.log(err);
  // })

  // items.map(product => {
  //   getProduct(`product.${product}`)
  //   .then(results => {
  //     setRelated({product_details : results})
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })


  return (

    <div>

      <AddRelated ids = {relatedId.ids}/>
      {/* <AddOutfits /> */}
 </div>
  )
}


export default Outfits;
