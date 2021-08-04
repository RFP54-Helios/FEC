import axios from 'axios';
import React, {useState, useContext} from 'react';
import Moment from 'moment';

const AnswerList = (props) => {
  const [reported, setReported] = useState(false);
  const [answerHelpful, setAnswerHelpful] = useState(true);

  const handleUpdateAnswerHelpfulness = (answerId) => {
    axios
    .put(`http://localhost:3000/hr-rfp/qa/answers/${answerId}/helpful`)
    .then(res => {
      props.helpUpdate();
    })
    .catch(err => console.log(err));
  };

  let answerer_name;
  if (props.answer.answerer_name === 'Seller') {
    answerer_name = <a><strong>{props.answer.answerer_name}</strong></a>
  } else { answerer_name = <a>{props.answer.answerer_name}</a>}



  return (
    <dt key={'answer'}><a><strong>A:</strong></a>&nbsp;&nbsp;{props.answer.body}
    {props.answer.photos.map(photo => {

      return (
        <div key={'uploadedPhoto'}>
        <img src={photo} id='answerer-posted-img'/>
        </div>
      )}
    )}
    <div>
      <a className='answerer-info'>By {answerer_name} on {Moment(props.answer.date).utc().format('MM/DD/YYYY')}</a>
    <a class='answer-helpful-click'>&nbsp;&nbsp;|&nbsp;&nbsp;Helpful?&nbsp;</a>
    {answerHelpful ? <a href='url' className='answer-helpful-link' onClick={(e) => { e.preventDefault(); handleUpdateAnswerHelpfulness(props.answer.id); setAnswerHelpful(false);}}>Yes({props.answer.helpfulness})</a> : <a>Yes({props.answer.helpfulness})</a>}
       <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
       {!reported ? <a href='url' class='answer-report-click' onClick={(e) => { e.preventDefault(); setReported(true); }}>Report</a> : <a>Reported</a>}
    </div>
    </dt>
  )
};

export default AnswerList;