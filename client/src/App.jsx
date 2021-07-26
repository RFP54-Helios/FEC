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
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits />
      </div>
      <div className='widget'>
        <QandA />
      </div>
      <div className='widget'>
        <Ratings />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
