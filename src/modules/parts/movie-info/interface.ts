export interface IMoviesList {
  movies: Array<IMovieItem>
}

export interface IMovie {
  movie: IMovieItem
}

export interface IMovieItem {
  title: string,
  overview: string,
  poster_path: string,
}