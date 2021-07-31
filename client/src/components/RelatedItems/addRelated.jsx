import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import items from './sampleData.json';
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

  useEffect(() => {
    if (props.ids.length === 0) {
      return;
    }

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
  }, [props.ids.length])


  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  }
 if(productDetails.details.length === 0 ||
    productDetails.styles.length === 0 ||
    productDetails.details.length != productDetails.styles.length) {
   return (
     <div>RelatedItems Loading</div>
   )
 }else {

  return (
      <div>
        <div className = "titleRelated">RELATED PRODUCTS </div>
        <div className="relatedItems" >

        {(click > 0) ? <FontAwesomeIcon icon={faAngleLeft} className = "right-arrow" onClick = {() => {setClick(click -1)}} />: ""}

          {productDetails.details.map((item, i) => {

            if(i < click  || i > click +3) {
              return "";
            }

            var defautStyles = productDetails.styles[i].results.filter((style)=>{
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
              textDecoration:'line-through'
            };
            var sale_style = {
              color:'red'
            };

            if (defaultStyle.sale_price !== null) {
              var sale_label = <span style={sale_style}>${defaultStyle.sale_price} </span>;
              var price_label = <span style={price_style}>${defaultStyle.original_price}</span>;
            } else {
              var sale_label = "";
              var price_label = <span>${defaultStyle.original_price}</span> ;
            }
            return (
              // eslint-disable-next-line react/jsx-key

              <div className="img_container" ><FontAwesomeIcon icon={faStar} className = "openModal"/>
                <div><img src = {defaultStyle.photos[0].url}className = "relatedThumbnail" ></img></div>
                <div>{item.category}</div>
                <div>{item.name}</div>
                <div>{sale_label}{price_label}</div>
                  <div>*****</div>
              </div>
            )

          })}
      {/* { (click + 3  <= items.length-1) ? <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" onClick={handleClick} /> : ""} */}
        </div>
   </div>
  )
        }
}


export default AddRelated;
