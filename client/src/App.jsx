import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/RelatedItems/Outfits.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import QandA from './components/QandA/QandA.jsx';
import { getProduct, postToApi } from './helperFunctions.js';

import items from './components/RelatedItems/sampleData.json';
import {questionList, answerList} from './components/QandA/sampledata.js';


export const ProductContext = React.createContext([{}, () => {}]);

let App = () => {

  const [product, setProduct] = useState({
    product_id: 17069,
    currentProduct: {},
    styles: [],
    ratings: []
  })

  useEffect(() => {
    Promise.all([
      getProduct(product.product_id)
    ])
    .then((productData) => {
      setProduct(prevState => ({
        ...prevState,
        currentProduct: productData[0]
        // ...prevState.product_id,
        // ...prevState.styles,
        // ...prevState.ratings
      }))
    })
  })

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      <h2>FEC</h2>
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits items={items}/>
      </div>
      <div className='widget' id='qa'>
        <QandA
          questionList={questionList} answerList={answerList}
        />
      </div>
      <div className='widget' id='ratings'>
        <Ratings />
      </div>
    </ProductContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
