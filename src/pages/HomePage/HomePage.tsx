import React, { Suspense, lazy } from "react"
import { Helmet } from "react-helmet"
import useFetch from "../../hooks/useFetch"
import { Movie } from "../../interfaces/movie"
import CardSeketon from "../../components/CardSekeleton/CardSeketon"
import "./HomePage.scss"

const MovieCard = lazy(() => import('./../../components/MovieCard/MovieCard'))

const HomePage: React.FC = () => {
  const { data: movies, error } = useFetch('movie', 'popular', {
    page: 10
  })


  if (error) {
    <h1>{error}</h1>
  }

  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <p className="home__title">Trang chủ</p>
      <div className="movie__list">
        {movies ? movies?.results.map((movie: Movie) => {
          return (
            <Suspense fallback={<CardSeketon />}>
              <MovieCard movie={movie} />
            </Suspense>
          )
        }) : null}
      </div>
    </div>
  )
}

export default HomePage
