import React from 'react';
import AnswerList from './answerList.jsx';

const ViewMoreAnswers = (props) => {

  return (
    <div>
    {Object.values(props.answers).slice(2).map((answer, index) =>
    <AnswerList key={index} answer={answer} />
    )}
    </div>
  )
};

export default ViewMoreAnswers;