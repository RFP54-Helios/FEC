import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import items from './sampleData.json';

const addOutfits = (props) => {

  return(
    <div>
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
