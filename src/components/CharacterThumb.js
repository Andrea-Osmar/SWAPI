import React from "react"
import { Link } from "react-router-dom"


export const CharacterThumb = ({ name, id }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>
        <Link to={`/characters/${id}`}>{name}</Link>
      </h2>
    </div>
  )
}
