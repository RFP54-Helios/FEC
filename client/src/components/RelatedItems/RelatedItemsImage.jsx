import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddOutfits from './addOutfits.jsx';
import Outfits from './Outfits.jsx';
import AddRelated from './addRelated.jsx';
import { ProductContext } from "../../App.jsx";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { getProduct, getFromApi, getStyles } from '../../helperFunctions.js';
import { FiStar } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';
import Stars from '../../Stars.jsx';
import Modal from './ComparisonModal.jsx';
import Price from './Price.jsx';


const RelatedItemsImage = (props) => {

  const [product, setProduct] = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleItemClick = () => {
      setProduct(prevState => ({
        ...prevState,
        product_id: props.id
      }))
  }
  return (
    <div>
      <div className="img_container" ><FiStar className="openModal" onClick = {() => setShow(true)}/>
      <Modal relatedItemFeatures = {props.features} relatedItemName = {props.name} onClose = {() => setShow(false)} show = {show}/>
        <div>{props.url ?<img onClick={handleItemClick} src={props.url} className="relatedThumbnail" ></img> : <img onClick={handleItemClick} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1jx9qlGd7Sa2fu4OmG39Ygg3O3g31UWsRonvUoXhnxGXtYqd1qavX3lhTs1PhO2eWFI&usqp=CAU"></img>}</div>
        <div>{props.category}</div>
        <div>{props.name}</div>
        <Price  sale_price = {props.sale_price} original_price = {props.original_price}/>
        <Stars ratings = {props.ratings}/>
      </div>
    </div>
  );
}

export default RelatedItemsImage;

