import React, {useState, useContext} from 'react';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';


const Addanswer = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState([]);
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
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("body", body);
    // formData.append("email", email);
    // formData.append("file", selectedFile);
console.log(photo)
    axios
      .post(`http://localhost:3000/hr-rfp/qa/questions/${props.questionId}/answers`, {body: body, name: name, email: email, photos: photo})
      .then((res) => {
        alert('Answer posted!');
        props.helpUpdate();
        setName('');
        setBody('');
        setEmail('');
        setPhoto([]);
      })
      .catch((err) => {
        alert('Post failed...');
        setName('');
        setBody('');
        setEmail('');
        setPhoto([]);
      });
  };

  return (props.trigger) ? (
    <div className='popup'>
      <div className='inner'>
        <h4 id='answer-modal-title'>Submit your Answer</h4>
        <h3>{product.currentProduct.name}: {props.questionBody}</h3>
        <form>
          <label><span class='red-star'>*</span>Your Answer:</label>
          <div>
          <textarea maxlength='1000' id="type-answer" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <span className='error' style={{color: "red"}}>{errors["body"]}</span>
          </div>
          <label><span class='red-star'>*</span>What is your nickname:</label>
          <input type='text' class='answer-name' value={name} maxlength='60' placeholder="Example: jack543!" onChange={(e) => setName(e.target.value)}></input>
          <span className='error' style={{color: "red"}}>&nbsp;&nbsp;{errors["name"]}</span>
          <p class='popup-text'>For privacy reasons, do not use your full name or email address</p>
          <label><span class='red-star'>*</span>Your email:</label>
          <input type='text' class='answer-email' value={email} maxlength='60' placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)}></input>
          <span className='error' style={{color: "red"}}>&nbsp;&nbsp;{errors["email"]}</span>
          <p class='popup-text'>For authentication reasons, you will not be emailed</p>
          <label>Upload your photos:</label>
          <PhotoUploader photo={photo} setPhoto={setPhoto} />
          <span className='upload-option'>Or</span>
          <label>Your image URL:&nbsp;&nbsp;</label>
          <input className='answer-url' type='text' onChange={(e) => setPhoto(photo.concat([e.target.value]))}></input>
          <input className='answer-url' type='text' onChange={(e) => setPhoto(photo.concat([e.target.value]))}></input>
          <input className='answer-url' type='text' onChange={(e) => setPhoto(photo.concat([e.target.value]))}></input>
          <input className='answer-url' type='text' onChange={(e) => setPhoto(photo.concat([e.target.value]))}></input>
          <input className='answer-url' type='text' onChange={(e) => setPhoto(photo.concat([e.target.value]))}></input>
          <button className='close-btn' onClick={() => {props.setTrigger();setErrors({}); setName(''); setBody(''); setEmail(''); setPhoto([]); }}>Cancel</button>
          <button id='submit-answer-btn' onClick={(e) => { e.preventDefault(); handleValidation()}}>Submit</button>
        </form>
      </div>
    </div>
  ): '';
};

const PhotoUploader = ({photo, setPhoto}) => {
  const [alert, setAlert] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);

  const deleteSelected = (pic) => {
    var index = thumbnails.indexOf(pic);
    const temp = [...thumbnails];
    temp.splice(index, 1);
    setThumbnails(temp);
    if (alert === true) { setAlert(false); }
  };

  // const handlePhoto = (e) => {
  //  const reader = new FileReader();
  //  reader.onload = () => {
  //    if(reader.readyState === 2) {
  //      setPhoto(photo => [...photo, reader.result]);
  //    }
  //  }
  //  reader.readAsDataURL(e.target.files[0]);
  // };
  const handlePhoto = (e) => {
    setPhoto(photo => [...photo, URL.createObjectURL(e.target.files[0])]);
    setThumbnails(thumbnails => [...thumbnails, URL.createObjectURL(e.target.files[0])]);
  };

  if (thumbnails.length > 5) {
    setThumbnails(thumbnails.slice(0, 5));
    setAlert(true);
   }


  return (
    <div className="photo-uploader">
      <input type="file" name="image-upload" id='select-photo' accept=".jpg, .jpeg, .png" onChange={handlePhoto}></input>
      {thumbnails.map(thumbnail => {
        return (
        <>
        <img key={'uploadingPhoto'} src={thumbnail} id='answer-img' onClick={() => {deleteSelected(thumbnail)}}/>
        </>
        )}
      )}
      {alert ? <a id='alert'>Exceeds maximum counts</a>: null}
    </div>
  )
};



export default Addanswer;