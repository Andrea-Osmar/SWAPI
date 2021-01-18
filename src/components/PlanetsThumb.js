import React from "react"

export const PlanetsThumb = ({ name, data }) => {
  return (
    <div className="cards-info" key={name}>
      <h2 className='cards-name'>{data.name}</h2>
      <div className="cards-info-details">
        <p className="details">Climate: {data.climate}</p>
        <p className="details">Terrain: {data.terrain}</p>
        <p className="details">Gravity: {data.gravity}</p>
        <p className="details">Population: {data.population}</p>
      </div>
    </div>
  )
}
