import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GrCaretNext } from 'react-icons/gr';
import { GrCaretPrevious } from 'react-icons/gr';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import RelatedItemsImage from './RelatedItemsImage.jsx';
import AddOutfits from './addOutfits.jsx';
import Outfits from './Outfits.jsx'
import { ProductContext } from "../../App.jsx";
import { getProduct, getFromApi, getStyles, getRatings } from '../../helperFunctions.js';




const AddRelated = (props) => {

  //app level state
  const [product, setProduct] = useContext(ProductContext);
  //component level state
  const [productDetails, setProductDetails] = useState({
    details: [],
    styles: [],
    ratings:[]
  })
// to clear the previous data that is concatenated.
  const[relatedIds, setRelatedIds] = useState([]);
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (props.ids.length === 0) {
      return;
    }
    var relatedIdsMatch = true;
    if (props.ids.length != relatedIds.length) {
      relatedIdsMatch = false;
    } else {
      props.ids.forEach((item, i) => {
        if (item !== relatedIds[i]) {
          relatedIdsMatch = false;
        }
      });
      }
    if (relatedIdsMatch == false) {
      setProductDetails({details:[], styles:[], ratings:[]});
      setRelatedIds(props.ids);
      setClick(0);
    props.ids.forEach(id => {
      Promise.all([
        getProduct(id),
        getStyles(id),
        getRatings(id)
      ])
        .then((productData) => {
          setProductDetails(prevState => ({
            ...prevState,
            details: prevState.details.concat(productData[0]),
            styles: prevState.styles.concat(productData[1]),
            ratings: prevState.ratings.concat(productData[2].ratings)
          }));
        });
    });
  }
  }, [props.ids]);

  const handleClick = () => {
    setClick(click + 1);
  }

  if (productDetails.details.length === 0 ||
    productDetails.styles.length === 0 ||
    productDetails.details.length != productDetails.styles.length) {
    return (
      <img src = "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"></img>
    )
  } else {
    return (
      <div>
        <div className="titleRelated">RELATED PRODUCTS </div>
        <div className="relatedItems" >
          {(click > 0) ?
          <GrCaretPrevious
          className="right-arrow"
          onClick={() => { setClick(click - 1) }}/>
           : ""}

          {productDetails.details.map((item, i) => {
            if (i < click || i > click + 3) {
              return "";
            }

            var defautStyles = productDetails.styles[i].results.filter((style) => {
              if (style['default?'] == true) {
                return true;
              }
              return false;
            });

            if (defautStyles.length != 0) {
              var defaultStyle = defautStyles[0];
            } else {
              var defaultStyle = productDetails.styles[i].results[0];
            }

            var rating = productDetails.ratings[i];

            return (
              <RelatedItemsImage key = {i}
              index = {i}
              url = {defaultStyle.photos[0].url}
              id = {item.id}
              category = {item.category}
              name = {item.name}
              sale_price = {defaultStyle.sale_price}
              original_price = {defaultStyle.original_price}
              ratings = {rating}
              features = {item.features}/>
            )
          })}
          {(click + 3 <= productDetails.details.length - 1) ?
           <GrCaretNext
           className="right-arrow"
           onClick={handleClick} />
           : ""}
        </div>
      </div>
    );
  }
}


export default AddRelated;
