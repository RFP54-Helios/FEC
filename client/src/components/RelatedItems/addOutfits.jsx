import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


import items from './sampleData.json';

const AddOutfits = (props) => {

  return(
    <div>
    <span className = "titleOutfit">YOUR OUTFIT</span>
      <div className="addOutfits">
      <div className="img_container">
          <FontAwesomeIcon icon={faPlus} className = "addFavourite" /><h3 className = "addh3">Add Outfits</h3>
        </div>

        <div className="img_container">
        <FontAwesomeIcon icon={faTimesCircle} className = "closeOutfit"/>
          <img src = "https://static.vecteezy.com/system/resources/thumbnails/001/664/484/small/cat-examining-the-dog-with-stethoscope-cartoon-vector.jpg"></img>
          <div>Puppy costumes</div>
          <div>$70</div>
          <div>****</div>

          </div>

        <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" />
      </div>
  </div>
  )
}
export default AddOutfits;