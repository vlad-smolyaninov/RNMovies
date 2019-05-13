import withHooks from '../../../../utils/withHooks'
// @ts-ignore
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react"
import {getMovie} from "../actions"
import MoviesList from '../components/MoviesList'


export default withHooks(() => {
  const dispatch = useDispatch()
  const movies = useSelector((state: any) => state.movieInfoReducer.movies)

  const [search, setSearch] = useState('')

  const onSearch = () => {
    dispatch(getMovie({search}))
  }

  return {
    search,
    setSearch,
    onSearch,
    movies: movies.results || []
  }
})(MoviesList)

