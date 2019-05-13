import React from "react"
import {Image, TouchableOpacity} from 'react-native'
import {MovieBlock, Overview, Title} from "../styled";
import {IMovieItem} from "../types"
import {NavigationInjectedProps, withNavigation} from "react-navigation"

export interface IMovie {
  movie: IMovieItem
}

const Movie: React.FC<IMovie & NavigationInjectedProps> = ({movie, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Details')}>
    <MovieBlock>
      <Image
        style={{width: 500, height: 150}}
        source={{uri: 'http://image.tmdb.org/t/p/w500//' + movie.poster_path}}
      />
      <Title>{movie.title}</Title>
      <Overview>{movie.overview}</Overview>
    </MovieBlock>
  </TouchableOpacity>
)

export default withNavigation(Movie)

