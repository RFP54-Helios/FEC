import React from 'react';


const ViewMoreAnswers = (props) => {

  return (
    <div>
    {Object.values(props.answers).slice(2).map(answer => {
      return (
      <dt>A: {answer.body}
      <div>By {answer.answerer_name} on {answer.date}
      <a>Helpful? <a href='url'>Yes({answer.helpfulness})</a></a>
      <a href='url'>Report</a>
      </div>
      </dt>
      )}
    )}
    </div>
  )
};

export default ViewMoreAnswers;