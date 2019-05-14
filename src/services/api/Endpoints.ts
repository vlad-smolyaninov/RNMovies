interface IEndpoint {
  [key: string]: any
}

export default {
  fetchMovieByName: ({ TMDBHost, TMDBApiKey, search }: IEndpoint) => (
    `${TMDBHost}/3/search/movie?api_key=${TMDBApiKey}&query=${encodeURIComponent(search)}`
  ),


};
