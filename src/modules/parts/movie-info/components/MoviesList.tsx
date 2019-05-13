import {ScrollView} from "react-native"
import React from "react"
import {IMoviesList} from "../interface"
import Movie from "./Movie";


const MovieList: React.FC<IMoviesList> = ({movies}) => (
  <ScrollView>
    {movies.map((movie, i) => (
      <Movie movie={movie} key={i}/>
    ))}
  </ScrollView>
)

export default MovieList