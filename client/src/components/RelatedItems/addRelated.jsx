import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import items from './sampleData.json';
import RelatedItemsImage from './RelatedItemsImage.jsx';
import AddOutfits from './AddOutfits.jsx';
import Outfits from './AddOutfits.jsx'
import { ProductContext } from "../../App.jsx";
import { getProduct, getFromApi, getStyles } from '../../helperFunctions.js';




const AddRelated = (props) => {

  //app level state
  const [product, setProduct] = useContext(ProductContext);
  //component level state
  const [productDetails, setProductDetails] = useState({
    details: [],
    styles: []
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
      setProductDetails({details:[], styles:[]});
      setRelatedIds(props.ids);
      setClick(0);
    props.ids.forEach(id => {
      Promise.all([
        getProduct(id),
        getStyles(id)

      ])
        .then((productData) => {
          setProductDetails(prevState => ({
            ...prevState,
            details: prevState.details.concat(productData[0]),
            styles: prevState.styles.concat(productData[1])
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
            return (

              // <div>
              //   <div className="img_container" ><FontAwesomeIcon icon={faStar} className="openModal" />
              //     <div>{defaultStyle.photos[0].url ? <img onClick={handleItemClick} src={defaultStyle.photos[0].url} className="relatedThumbnail" ></img> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1jx9qlGd7Sa2fu4OmG39Ygg3O3g31UWsRonvUoXhnxGXtYqd1qavX3lhTs1PhO2eWFI&usqp=CAU"></img>}</div> */
              //     <div>{item.category}</div>
              //     <div>{item.name}</div>
              //     <div>{sale_label}{price_label}</div>
              //     <div>★★★★★</div>
              //   </div>

              // </div>


              <div>

              <RelatedItemsImage url = {defaultStyle.photos[0].url} id = {item.id}  category = {item.category} name = {item.name} sale_label = {sale_label}price_label = {price_label} />
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
