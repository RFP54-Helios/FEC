//render
  //return
    //Product Overview
    //Related products
    //Q&A
    //Reviews and ratings
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import Outfits from './components/Outfits.jsx';
import QandA from './components/QandA.jsx';
import Ratings from './components/Ratings.jsx';

let App = (props) => {
  return (
    <div>
      <h2>FEC</h2>
      <Overview />
      <Outfits />
      <QandA />
      <Ratings />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
