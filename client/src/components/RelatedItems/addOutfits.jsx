import React, { useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from "../../App.jsx";

const AddOutfits = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  const[selectedItem, setSelectedItem] = useState({
    details :[]
  }
  )

  const addOutfitsClick = () => {
    setSelectedItem((prevState =>({
      ...prevState,
      details:prevState.details.concat(product.currentProduct)
    })))

  }



  return(
    <div>
    <span className = "titleOutfit">YOUR OUTFIT</span>
      <div className="addOutfits">
      <div className="img_container">
          <FontAwesomeIcon icon={faPlus} className = "addFavourite" onClick = {addOutfitsClick} /><h3 className = "addh3">Add Outfits</h3>
        </div>
        {selectedItem.details.map(item => {
          return (
          <div className="img_container">
          <FontAwesomeIcon icon={faTimesCircle} className = "removeOutfit" />
            <img src = "https://static.vecteezy.com/system/resources/thumbnails/001/664/484/small/cat-examining-the-dog-with-stethoscope-cartoon-vector.jpg"></img>
            <div>{item.category}</div>
            <div>{item.name}</div>
            <div>{item.original_price}</div>
            <div>★★★★★</div>

            </div>
          )
        })}


        <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" />
      </div>
  </div>
  )
}
export default AddOutfits;