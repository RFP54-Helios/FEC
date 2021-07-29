import axios from 'axios';

const makeApiCall = (route, params) => {
  axios.get(`http://localhost:3000/hr-rfp/${route}`, {params})
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
}

export default makeApiCall;
