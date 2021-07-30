import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import items from './sampleData.json';
import addOutfits from './addOutfits.jsx';


const Outfits = (props) => {
  const[isRightArrowVisible,setisRightArrowVisible] = useState(true);
  const[isLeftArrowVisible,setisLeftArrowVisible] = useState(false);

  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
    // if(click + 4 >= items.length-1) {
    //   setisRightArrowVisible(false);
    // }
    //   // setClick(click+4);
    //   setisLeftArrowVisible(true);
    // }
    // setArrow(true);
  }


  return (
    <div>
      <div className = "titleRelated">RELATED PRODUCTS </div>
      <div className="relatedItems" >

      {(click > 0) ? <FontAwesomeIcon icon={faAngleLeft} className = "right-arrow" onClick = {() => {setClick(click -1)}} />: ""}

        {props.items.map((item, i) => {
          if(i < click  || i > click +3) {
            return "";
          }


          var price_style = {
            textDecoration:'line-through'
          };
          var sale_style = {
            color:'red'
          };

          if (item.sale_price > 0) {
            var sale_label = <span style={sale_style}>${item.sale_price} </span>;
            var price_label = <span style={price_style}>${item.default_price}</span>;
          } else {
            var sale_label = "";
            var price_label = <span>${item.default_price}</span> ;
          }

          return (
            // eslint-disable-next-line react/jsx-key

            <div className="img_container" ><i className="far fa-star star"></i>
              <div><img src = {item.img}></img></div>
              <div>{item.category}</div>
              <div>{item.name}</div>
              <div>{sale_label}{price_label}</div>
                <div>*****</div>
            </div>
          )

        })}
    { (click + 3  <= items.length-1) ? <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" onClick={handleClick} /> : ""}
    <addOutfits items = {items}/>
      </div>


 </div>
  )
}


export default Outfits;
