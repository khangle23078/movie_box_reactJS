import React from "react"
import { Movie } from "../../interfaces/movie"

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`}
        alt={movie.overview}
        loading="lazy"
        width={200}
        height={200}
      />
      <p>{movie.title}</p>
    </div>
  )
}

export default MovieCard
