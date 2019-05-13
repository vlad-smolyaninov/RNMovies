import {ScrollView} from "react-native"
import React from "react"
import Movie from "./Movie";
import {IMovieItem} from "../types"
import SearchInput from "./SearchInput"

export interface IMoviesList {
  movies: Array<IMovieItem>
}

const MovieList: React.FC<IMoviesList> = ({movies, search, setSearch, onSearch}) => (
  <ScrollView>
    <SearchInput
      onSearch={onSearch}
      search={search}
      setSearch={setSearch}
    />
    {movies.map((movie, i) => (
      <Movie movie={movie} key={i}/>
    ))}
  </ScrollView>
)

export default MovieList