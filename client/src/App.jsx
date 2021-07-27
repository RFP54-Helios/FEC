import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/Outfits.jsx';
import QandA from './components/QandA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';

let App = () => {
  return (
    <div>
      <h2>FEC</h2>
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits />
      </div>
      <div className='widget'>
        <QandA />
      </div>
      <div className='widget' id='ratings'>
        <Ratings />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
