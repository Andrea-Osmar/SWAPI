import React from "react"

export const SpeciesThumb = ({ name, data }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>{data.name}</h2>

      <div className="cards-info-details">
        <p className="details">Classification: {data.classification}</p>
        <p className="details">Language: {data.language}</p>
        <p className="details">Lifespan: {data.average_lifespan} years</p>
      </div>
    </div>
  )
}