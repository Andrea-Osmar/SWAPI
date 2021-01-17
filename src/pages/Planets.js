import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { PlanetsThumb } from '../components/PlanetsThumb'
import Loader from "../components/Loader"

export const Planets = () => {
  const [planets, setPlanets] = useState([])
  const planetURL = "https://swapi.dev/api/planets/"
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(planetURL)
      .then((res) => res.json())
      .then((json) => {
        setPlanets(json.results)
        setLoading(false)
      })
  }, [])

  return (
    <>
    {loading && <Loader />}
      {!loading && (
      <div className="container">
        <Link to="/">
          <button className="back-button" type="button">
            <span> ⬅</span>
          </button>
        </Link>
        <h1 className='title'>Star Wars Planets</h1>
        <div className="cards">
          {planets.map((planets, index) => (
            <PlanetsThumb
            name={planets.name}
            id={index + 1}
            key={planets.name}
            />
            ))}
        </div>
      </div>
      )}
    </>
  )
}