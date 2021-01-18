import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const FilmsDetails = () => {
  const [filmsDetail, setFilmsDetails] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https//swapi.dev/api/films/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFilmsDetails(data)
      })
  }, [id])

  return (
    <div className="container">
      <Link to="/films">
        <button className="back-button" type="button">
          <i className="fas fa-long-arrow-alt-left"></i>
        </button>
      </Link>
      <h1 className="title">{filmsDetail.title}</h1>
      <div className="cards-info-details-films">
        <p className="details">Release: {filmsDetail.release_date}</p>
        <p className="details">Director: {filmsDetail.director}</p>
        <p className="details">Opening: {filmsDetail.opening_crawl}</p>
      </div>
    </div>
  )
}