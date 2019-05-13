export default {
  fetchMovieByName: ({ tmbHost, apiKey, search }) => (
    `${tmbHost}/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(search)}`
  ),


};
