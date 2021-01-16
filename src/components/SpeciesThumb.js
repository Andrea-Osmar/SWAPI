import React from "react"
import { Link } from "react-router-dom"

export const SpeciesThumb = ({ name, id }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>
        <Link to={`/species/${id}`}>{name}</Link>
      </h2>
    </div>
  )
}