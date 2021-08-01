import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
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
     })
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
          }))
        })
    })
  }
  }, [props.ids])


  const handleClick = () => {
    setClick(click + 1);
  }

  // const handleItemClick = () => {
  //   setProduct(prevState => ({
  //     ...prevState,
  //     product_id: item.product_id
  //   }))
  // }

  if (productDetails.details.length === 0 ||
    productDetails.styles.length === 0 ||
    productDetails.details.length != productDetails.styles.length) {
    return (
      <div>Related Items Loading</div>
    )
  } else {

    return (
      <div>
        <div className="titleRelated">RELATED PRODUCTS </div>
        <div className="relatedItems" >

          {(click > 0) ? <FontAwesomeIcon icon={faAngleLeft} className="right-arrow" onClick={() => { setClick(click - 1) }} /> : ""}

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

            var price_style = {
              textDecoration: 'line-through'
            };
            var sale_style = {
              color: 'red'
            };

            if (defaultStyle.sale_price !== null) {
              var sale_label = <span style={sale_style}>${defaultStyle.sale_price} </span>;
              var price_label = <span style={price_style}>${defaultStyle.original_price}</span>;
            } else {
              var sale_label = "";
              var price_label = <span>${defaultStyle.original_price}</span>;
            }

            var rating = productDetails.ratings[i];

            return (

              <div>
              <RelatedItemsImage url = {defaultStyle.photos[0].url} id = {item.id}  category = {item.category} name = {item.name} sale_label = {sale_label}price_label = {price_label} ratings = {rating} />
              </div>
            )

          })}
          {(click + 3 <= productDetails.details.length - 1) ? <FontAwesomeIcon icon={faAngleRight} className="right-arrow" onClick={handleClick} /> : ""}
        </div>
      </div>
    )
  }
}


export default AddRelated;
