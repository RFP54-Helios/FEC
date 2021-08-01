import React from 'react';
import AnswerList from './answerList.jsx';

const ViewMoreAnswers = (props) => {

  return (
    <div>
    {Object.values(props.answers).slice(2).map(answer =>
    <AnswerList answer={answer} />
    )}
    </div>
  )
};

export default ViewMoreAnswers;