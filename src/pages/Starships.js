import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export const Starships = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(res =>res.json())
    .then(json => {
      setStarships(json.results)// set in state 
    })
  },[])

  return (
    <>
      <div className="container">
        <h1>Star Wars Starships</h1>
        <div className="cards">
          {starships.map((starships) => (
            <div className="cards-info" key={starships.name}>
              <h2>
                <Link to={`/starships/${starships.name}`}>{starships.name}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}