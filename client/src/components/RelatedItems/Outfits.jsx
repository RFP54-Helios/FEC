import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ProductContext } from "../../App.jsx";

import items from './sampleData.json';
import AddOutfits from './AddOutfits.jsx';
import AddRelated from './AddRelated.jsx';



const Outfits = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  //get the list of related items from the api
  //get the product info of each of the product by calling the api

  return (
    <div>
      <AddRelated items = {props.items} />
      <AddOutfits items = {items}/>
 </div>
  )
}


export default Outfits;
