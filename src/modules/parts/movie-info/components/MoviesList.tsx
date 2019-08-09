import {ScrollView} from "react-native"
import React from "react"
import Movie from "./Movie";
import {ISearchInput, IMoviesList} from "../types"
import SearchInput from "./SearchInput"


const MovieList: React.FC<IMoviesList & ISearchInput> = ({movies, search, setSearch, onSearch}) => (
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