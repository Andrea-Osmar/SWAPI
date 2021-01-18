import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const PlanetsDetails = () => {
  const [planetsDetail, setPlanetsDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanetsDetail(data)
      })
  }, [id])

  return (
    <div className="container">
      <Link to="/planets">
        <button className="back-button" type="button">
          <span> ⬅</span>
        </button>
      </Link>
      <h1 className="title">{planetsDetail.name}</h1>
      <div className="cards-info-details">
        <p className="details">Climate: {planetsDetail.climate}</p>
        <p className="details">Terrain: {planetsDetail.terrain}</p>
        <p className="details">Gravity: {planetsDetail.gravity}</p>
      </div>
    </div>
  )
}