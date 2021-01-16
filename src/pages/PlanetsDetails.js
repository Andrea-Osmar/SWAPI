import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const PlanetsDetails = () => {
  const [planetsDetail, setPlanetsDetail] = useState({})
  const { id } = useParams()

  console.log(planetsDetail)

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanetsDetail(data)
        console.log("detail", data)
      })
  }, [id])

  return (
    <div className="container">
      <Link to="/planets">
        <button className="back-button" type="button">
          <span> ⬅</span>
        </button>
      </Link>
      <h1>{planetsDetail.name}</h1>
      <div className="cards-info-details">
        <p className="details">Climate: {planetsDetail.climate}</p>
        <p className="details">Terrain: {planetsDetail.terrain}</p>
        <p className="details">Gravity: {planetsDetail.gravity}</p>
      </div>
    </div>
  )
}
