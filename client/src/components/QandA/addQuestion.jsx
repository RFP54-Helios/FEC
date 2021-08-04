import React, {useState, useContext} from 'react';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';

const AddQuestion = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let isValid = true;
    let errors = {};
    if(name.length === 0) {
      isValid = false;
      errors['name'] = 'Please fill out this field'
    }
    if(body.length === 0) {
      isValid = false;
      errors['body'] = 'Please fill out this field'
    }
    if(typeof email !== undefined){
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 &&
         lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
           isValid = false;
           errors["email"] = "Email is invalid";
      }
    }
    setErrors(errors);
    if(isValid) {
      submitForm(); props.setTrigger();
    }
  };

  const submitForm = () => {
    axios
      .post(`http://localhost:3000/hr-rfp/qa/questions`, {body: body, name: name, email: email, product_id: product.product_id})
      .then((res) => {
        alert("Question posted!");
        props.toggleUpdate();
        setName('');
        setBody('');
        setEmail('');
      })
      .catch((err) => alert("Post failed..."));
  };


  return (props.trigger) ?(
    <div className='popup'>
      <div className='inner'>
        <h4 id='answer-modal-title'>Ask Your Question</h4>
        <h3>About the {product.currentProduct.name}</h3>
        <form>
          <label><span class='red-star'>*</span>Your Question:</label>
          <div>
          <textarea maxlength='1000' id="type-answer" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <span className='error' style={{color: "red"}}>{errors["body"]}</span>
          </div>
          <label><span class='red-star'>*</span>What is your nickname:</label>
          <input type='text' class='answer-name' value={name} maxlength='60' placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)}></input>
          <span className='error' style={{color: "red"}}>&nbsp;&nbsp;{errors["name"]}</span>
          <p class='popup-text'>For privacy reasons, do not use your full name or email address
          </p>
          <label><span class='red-star'>*</span>Your email:</label>
          <input type='text' class='answer-email' value={email} maxlength='60' placeholder='Why did you like the product or not?' onChange={(e) => setEmail(e.target.value)}></input>
          <span className='error' style={{color: "red"}}>&nbsp;&nbsp;{errors["email"]}</span>
          <p class='popup-text'>For authentication reasons, you will not be emailed</p>
          <button className='close-btn' onClick={() => {props.setTrigger(); setErrors({}); setName('');
          setBody(''); setEmail('');}}>Cancel</button>
          <button id='submit-question-btn' onClick={(e) => { e.preventDefault(); handleValidation(); }}>Post</button>
        </form>
      </div>
    </div>
  ): '';
};

export default AddQuestion;
