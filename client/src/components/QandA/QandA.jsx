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

  let moreQuestionsBtn;
  if (questionData.length > 4) {
    moreQuestionsBtn =
    <div><button className='see-more-questions' onClick={() => {toggleMoreQuestions();}}>
    More Answered Questions</button></div>
  }
  if (seeMoreQuestions===true) {
    moreQuestionsBtn = null;
  }

  let searchResult;
  if (searching.length < 3) {
    searchResult = questionData;
  } else {
    moreQuestionsBtn = null;
    searchResult = questionData.filter((question) => {
      const questionContent = question.question_body.toLowerCase();
      return questionContent.includes(searching);
    });
  }
  let moreQuestions = searchResult.slice(4);
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
  }, [product.product_id]);

  return(
    <div id='qa'>
      <h3>Customer questions & answers</h3>
      <input className='search' type='text' value={searching} placeholder='Have a question? Search for answers…' onChange={() => setSearching(event.target.value)} />
      <div id='body'>
      {searchResult.slice(0, 4).map(question =>
        <QuestionList question={question} />
      )}
      {moreQuestionsBtn}
      {seeMoreQuestions===true ? <ViewMoreQuestions questions={moreQuestions} /> : null}
      </div>
      <button className='ask-question-btn' onClick={(e) => {e.preventDefault(); setAddQuestionPopup(true)}}>Ask your question</button>
      <AddQuestion trigger={addQuestionPopup} setTrigger={setAddQuestionPopup}>
      </AddQuestion>
    </div>
  )
};


const ViewMoreQuestions = (props) => {
  const [evenMore, setEvenMore] = useState(false);
  const toggleEvenMore = ()=> {setEvenMore(!evenMore)};
  const [moreQBtn, setMoreQBtn] = useState(false);
  const toggleMoreQBtn = () => { setMoreQBtn(!moreQBtn) };
  let twoQuestions = props.questions.splice(0, 2);

  return (
    <>
    <div>
    {props.questions.map(question =>
      <QuestionList question={question}/>
    )}
    </div>
    {moreQBtn ? <button onClick={() => { toggleMoreQBtn(); }}>See more questions</button> : null}
    {/* {evenMore ? <EvenMoreQ questions={props.questions} /> : null} */}
    </>
  )
};

export default QandA;

