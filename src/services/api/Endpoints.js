export default {
  fetchMovieByName: ({ tmbHost, apiKey, movieName }) => (
    `${tmbHost}/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`
  ),


};
