import React from "react"
import {Image} from 'react-native'
import {IMovie} from "../interface";
import {MovieBlock, Overview, Title} from "../styled";

const Movie: React.FC<IMovie> = ({movie}) => (
  <MovieBlock>
    <Image
      style={{width: 500, height: 150}}
      source={{uri: 'http://image.tmdb.org/t/p/w500//' + movie.poster_path}}
    />
    <Title>{movie.title}</Title>
    <Overview>{movie.overview}</Overview>
  </MovieBlock>
)

export default Movie

