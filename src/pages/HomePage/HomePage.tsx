import React from "react"
import { Helmet } from "react-helmet"
import "./HomePage.scss"

const HomePage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <p className="home__title">Danh sách phim</p>
      <p>{import.meta.env.VITE_MOVIE_API}</p>
    </div>
  )
}

export default HomePage
