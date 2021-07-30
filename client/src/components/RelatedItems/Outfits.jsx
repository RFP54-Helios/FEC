import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import items from './sampleData.json';


const Outfits = (props) => {
  const[arrow,setArrow] = useState(false);
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index+4);
    setArrow(true);
  }

  return (
    <div>
      <div className = "titleRelated">RELATED PRODUCTS </div>
      <div className="relatedItems"  >
        {props.items.map((item, i) => {
          if(i < index || i > index +3) {
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
   <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" onClick={handleClick} />

      </div>
      <div className = "titleOutfit">YOUR OUTFIT</div>
      <div className="addOutfits">

        <div className="img_container"></div>
        <div className="img_container"></div>
        <div className="img_container"></div>
        <div className="img_container"></div>
        <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" />
      </div>

 </div>
  )
}


export default Outfits;
