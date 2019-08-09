import {NativeSyntheticEvent, NativeTouchEvent} from 'react-native'


export interface ISearchInput {
  search: string,
  setSearch: (val: string) => void,
  onSearch: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
}

export interface IMoviesList {
  movies: Array<IMovieItem>
}

export interface IMovieItem {
  title: string,
  overview: string,
  poster_path: string,
}