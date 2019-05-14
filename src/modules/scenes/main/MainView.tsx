import React from "react"
import Layout from "../../layout/Layout"
import MovieList from "../../parts/movie-info/containers/MoviesList"

const MainView: React.FC = () => (
  <Layout>
    <MovieList/>
  </Layout>
)

export default MainView;
