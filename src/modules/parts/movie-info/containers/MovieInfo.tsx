import withHooks from '../../../../utils/withHooks';
// @ts-ignore
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react"
import {getMovie} from "../actions"
import MoviesList from '../components/MoviesList';


export default withHooks(() => {
    const dispatch = useDispatch()
    const movies = useSelector((state: any) => state.movieInfoReducer.movies)

    useEffect(() => {
      dispatch(getMovie())
    }, [])

    return {
      movies: movies.results || []
    }
  }
)(MoviesList)

