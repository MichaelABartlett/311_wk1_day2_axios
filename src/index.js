// import axios here
const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
//const api_key = 'd771b19ef336ed8381def3a60b574464'
const api_key = process.env.MOVIE_DB_API_KEY;

console.log('the api key is:', api_key)


/**
 * @returns this function returns the url
 */
const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here

  return axios(url).then(function(response){
    console.log('the response for making the api call:',response);
    return response;
  })
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response){
    console.log('Movie:',response);
    return response.data;
  })
}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response){
    return response.status
  })
  .catch(function(err){
    return err.response.status;
  })
}

discoverMovie();


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}