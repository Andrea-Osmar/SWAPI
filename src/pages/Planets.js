import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((json) => {
        setPlanets(json.results)
      })
  }, [])

  return (
    <>
      <div className="container">
        <h1>Star Wars Planets</h1>
        <div className="cards">
          {planets.map((planets) => (
            <div className="cards-info" key={planets.name}>
              <h2>
                <Link to={`/planets/${planets.name}`}>{planets.name}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}