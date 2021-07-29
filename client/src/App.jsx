import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/Outfits.jsx';
import QandA from './components/QandA/QandA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import products from '/sampleProducts.json';
import styles from '/sampleStyles.json';
import {questionList, answerList} from './components/QandA/sampledata.js';

export const ProductContext = React.createContext([{}, () => {}]);

let App = () => {

  const [product, setProduct] = useState({
    currentProduct: {},
    product_id: 17069,
    styles: [],
    ratings: []
  })

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(),
  //     axios.get()
  //   ])
  //   .then((productData) => {
  //     setProduct({
  //       currentProduct: productData[0],
  //       styles: productData[1],
  //       ...prevData.ratings
  //     })
  //   })
  // })

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      <h2>FEC</h2>
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits />
      </div>
      <div className='widget' id='qa'>
        <QandA questionList={questionList} answerList={answerList}/>
      </div>
      <div className='widget' id='ratings'>
        <Ratings />
      </div>
    </ProductContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
