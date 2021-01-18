import React from "react"

export const CharacterThumb = ({ name, data }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>{data.name}</h2>

      <div className="cards-info-details">
        <p className="details">Gender: {data.gender}</p>
        <p className="details">
          Birthyear: {data.birth_year}
          <br></br>
          <span className="details-year">(Before the Battle of Yavin)</span>
        </p>
        <p className="details">Height: {data.height} cm</p>
      </div>
    </div>
  )
}