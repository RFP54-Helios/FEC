import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from "../../App.jsx";
import Outfits from './Outfits.jsx';
import Stars from '../Stars.jsx';
import Price from './Price.jsx';

const AddOutfits = (props) => {
  const [product, setProduct] = useContext(ProductContext);


  const [selectedItem, setSelectedItem] = useState({
    details: []
  })

  const [click, setClick] = useState(0);

  const addOutfitsClick = () => {
    var productExists = false;
    selectedItem.details.forEach(item => {
      if (item.product.id === product.currentProduct.id) {
        productExists = true;
      }
    })
    if (productExists === false) {
      setSelectedItem((prevState => ({
        ...prevState,
        details: prevState.details.concat({
           product: product.currentProduct,
           style: props.currentStyle,
           ratings:product.ratings
          })
      })));
    }
  }
    useEffect(() => {
      const outfitDetails = localStorage.getItem('outfitDetails');
    if(outfitDetails) {
      setSelectedItem({
        details:JSON.parse(outfitDetails)
      })
    }
    },[])

    useEffect(() => {
      if (selectedItem.details.length != 0) {
        localStorage.setItem('outfitDetails',JSON.stringify(selectedItem.details));
      }
    },[selectedItem.details])

  const handleClickCloseButton = () => {
    const productIdEquals = (productIdtoCompare) => {
      return function (item) {
        return item.product.id != productIdtoCompare;
      }
    }

    let filteredItems = selectedItem.details.filter(productIdEquals(event.target.dataset.id));

    setSelectedItem({
      details: filteredItems
    })
  }

  const handleClick = () => {
    setClick(click + 1);
  }
  return (
    <div>
      <span className="titleOutfit">YOUR OUTFIT</span>
      <div className="addOutfits">
        <div className="img_container">
          <FontAwesomeIcon icon={faPlus}
          className="addFavourite"
          onClick={addOutfitsClick}/>
           <h3 className="addh3">Add Outfits</h3>
        </div>

        {(click > 0) ?
        <FontAwesomeIcon icon={faAngleLeft}
        className="right-arrow"
        onClick={() => { setClick(click - 1) }}/>
        : ""}

        {selectedItem.details.map((item, i) => {
           if (i < click || i > click + 3) {
            return "";
          }

          return (
            <div className="img_container">
              <FontAwesomeIcon icon={faTimesCircle}
              className="removeOutfit"
              onClick={handleClickCloseButton}
              data-id={item.product.id}/>
              <img src={item.style.photos[0].thumbnail_url}
              className="relatedThumbnail"></img>
              <div>{item.product.name}</div>
              <div>Style : {item.style.name}</div>
              <Price  sale_price = {item.style.sale_price}
               original_price = {item.style.original_price}/>
              <div><Stars ratings = {item.ratings} /></div>
            </div>
          );
        })}

        {(click + 2 <= selectedItem.details.length - 1) ?
         <FontAwesomeIcon icon={faAngleRight}
          className="right-arrow"
          onClick={handleClick} /> : ""}
      </div>
    </div>
  );
}
export default AddOutfits;