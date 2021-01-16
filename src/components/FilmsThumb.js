import React from "react"
import { Link } from "react-router-dom"

export const FilmsThumb = ({ name, id }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>
        <Link to={`/films/${id}`}>{name}</Link>
      </h2>
    </div>
  )
}