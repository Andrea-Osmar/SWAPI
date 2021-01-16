import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SpeciesThumb } from '../components/SpeciesThumb'

export const Species = () => {
  const [species, setSpecies] = useState([])
  const planetURL = "https://swapi.dev/api/species/"
  
  useEffect(() => {
    fetch(planetURL)
      .then((res) => res.json())
      .then((json) => {
        setSpecies(json.results)
      })
  }, [])

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="back-button" type="button">
            <span> ⬅</span>
          </button>
        </Link>

        <h1>Star Wars Species</h1>
        <div className="cards">
          {species.map((species, index) => (
            <SpeciesThumb
            name={species.name}
            id={index + 1}
            key={species.name}
            />
            ))}
        </div>
      </div>
    </>
  )
}