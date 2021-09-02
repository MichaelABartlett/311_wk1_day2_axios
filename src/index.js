// import axios here
const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = process.env.MOVIE_DB_API_KEY;

console.log('the api key is:', api_key)


/**
 * @returns this function returns the url
 */
const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here

  return axios(url).then(function(response){
    //console.log('the response for making the api call:',response);
    return response;
  })
}

/**
 * 
 * @param {id} id - this is passed in by the test to locate a specific movie
 * @returns the data for the movie that was selected by id
 */
const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response){
    //console.log('Movie:',response);
    return response.data;
  })
}

/**
 * this function is given a bad id, it does not exist, 
 * the function then catches and returns the error status
 * @returns the error for the bad call
 */
const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  return axios(url).then(function(response){
    //return response.status
  })
  .catch(function(err){
    return err.response.status;
  })
}

// if you want to run just one function you can do the normal function call
// keep in mind that the second function gets a id passed in so if you want to run that function 
// you will need to pass in a valid (id)
// enter the line below into the terminal to run just this file

// node src/index.js

discoverMovie();


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}