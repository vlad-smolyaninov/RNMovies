import {ScrollView} from "react-native"
import React from "react"
import {IMoviesList} from "../interface"
import Movie from "./Movie";

export default ({movies}: IMoviesList) => (
  <ScrollView>
    {movies.map((movie, i) => (
      <Movie movie={movie} key={i}/>
    ))}
  </ScrollView>
)