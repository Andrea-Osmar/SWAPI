import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export const SpeciesDetails = () => {
  const [speciesDetail, setSpeciesDetails] = useState({})
  const { id } = useParams()

  console.log(speciesDetail)

  useEffect(() => {
    fetch(`https://swapi.dev/api/species/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpeciesDetails(data)
        console.log("detail", data)
      })
  }, [id])

  return (
    <div className="container">
      <Link to="/species">
        <button className="back-button" type="button">
          <span> ⬅</span>
        </button>
      </Link>
      <h1 className='title'>{speciesDetail.name}</h1>
      <div className="cards-info-details">
        <p className="details">Classification: {speciesDetail.classification}</p>
        <p className="details">Language: {speciesDetail.language}</p>
        <p className="details">Lifespan: {speciesDetail.average_lifespan} years</p>
      </div>
    </div>
  )
}