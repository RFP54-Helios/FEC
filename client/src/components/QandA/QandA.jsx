import React, {useState, useContext, useEffect} from 'react';
import QuestionList from './questionList.jsx';
import AddQuestion from './addQuestion.jsx';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';

const QandA = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [questionData, setQuestionData] = useState([]);
  const [searching, setSearching] = useState('');
  const [seeMoreQuestions, setSeeMoreQuestions] = useState(false);
  const toggleMoreQuestions = () => setSeeMoreQuestions(!seeMoreQuestions);
  const [addQuestionPopup, setAddQuestionPopup] = useState(false);
  const [counter, setCounter] = useState(4);
  const [update, setUpdate] = useState(false);
  const toggleUpdate = () => setUpdate(!update);

  let moreQuestionsBtn;

  let searchResult = questionData.slice(0, counter);
  const increaseByTwo = () => {
    setCounter(counter + 2);
    if(counter >= questionData.length) { toggleMoreQuestions(); }
  };



  if (questionData.length > 4) {
    moreQuestionsBtn =
    <div><button className='see-more-questions' onClick={() => {increaseByTwo();}}>
    More Answered Questions</button></div>
  }
  if (seeMoreQuestions===true) {
    moreQuestionsBtn = null;
  }

  if (searching.length >= 3) {
    moreQuestionsBtn = null;
    searchResult = questionData.filter((question) => {
      const questionContent = question.question_body.toLowerCase();
      return questionContent.includes(searching);
    });
  }


  // let sortedQuestionList;
  // sortedQuestionList= Object.values(questionData).sort(function(a, b) {
  //   return b.question_helpfulness - a.question_helpfulness;
  //  })

  useEffect(() => {
    axios
    .get(`http://localhost:3000/hr-rfp//qa/questions/?product_id=${product.product_id}`,
    { params: { count: 30 } })
    .then(res => {
      setQuestionData(res.data.results)
    })
    .catch(err => console.log(err));
  }, [product.product_id, update]);

  return(
    <div id='qa'>
      <h3>Customer questions & answers</h3>
      <input className='search' type='text' value={searching} placeholder='Have a question? Search for answers…' onChange={() => setSearching(event.target.value)} />
      <div id='body'>
      {searchResult.map(question =>
        <QuestionList question={question} toggleUpdate={toggleUpdate}/>
      )}
      {moreQuestionsBtn}
      </div>
      <button className='ask-question-btn' onClick={(e) => {e.preventDefault(); setAddQuestionPopup(true)}}>Ask your question</button>
      <AddQuestion trigger={addQuestionPopup} setTrigger={setAddQuestionPopup} toggleUpdate={toggleUpdate}>
      </AddQuestion>
    </div>
  )
};

export default QandA;

