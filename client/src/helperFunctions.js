import axios from "axios";

// make a request to local server at `route` with `params`
// route can be 'products/17069/styles/' or 'reviews/' etc.
// example params
// let queryParams = {
//   product_id: 17069,
//   count: 14,
//   page: 2
// }
export function getFromApi(route, params, callback) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3000/hr-rfp/${route}`, { params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      });
  })
}

// represents products/product_id/
export function getProduct(product_id) {
  return getFromApi(`products/${product_id}`);
}

// represents products/product_id/styles
export function getStyles(product_id) {
  return getFromApi(`products/${product_id}/styles`);
}

// represents reviews/meta?product_id=00000
export function getRatings(product_id) {
  return getFromApi(`reviews/meta?product_id=${product_id}`);
}

// to be added
export function postToApi(queryOptions, callback) {
  queryOptions = {
    method: "post",
    url: `http://localhost:3000/hr-rfp/`,
    data: {
      product_id: 17069,
    },
  };
  axios(queryOptions)
  .then((res) => {
    callback(null, res.data);
  })
  .catch((err) => {
    callback(err);
  });
}

// return a weighted average of input `ratings` object
// expected input shape: {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
// from `getRatings()` API helper function
export function averageRating(ratings) {
  // edge case: single rating
  if (typeof ratings === 'number') return ratings;

  let totalCount = 0;
  let totalRatings = 0;

  for (let rating in ratings) {
    let count = Number(ratings[rating]);
    totalCount += count;
    totalRatings += count * Number(rating);
  }

  // round weightedAverage to nearest half
  let weightedAverage = totalRatings / totalCount
  return Math.round(weightedAverage * 2) / 2;
}

// return an array of star fill levels
// 1 = full
// 0 = empty
// 0.5 = half
// expected input shape: {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
// output shape: [1, 1, 0.5, 0, 0]
export function getStarsArr(ratings) {
  let starsCount = averageRating(ratings);
  let arrStars = [];

  for (let i = 0; i < 5; i++) {
    if (starsCount >= 1) {
      starsCount -= 1;
      arrStars.push(1);
    } else if (starsCount > 0) {
      starsCount -= 0.5;
      arrStars.push(0.5);
    } else {
      arrStars.push(0);
    }
  }

  return arrStars;
}
