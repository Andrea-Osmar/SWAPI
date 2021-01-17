import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { FilmsThumb } from '../components/FilmsThumb'
import Loader from "../components/Loader"

export const Films = () => {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const planetURL = "https://swapi.dev/api/films/"
  

  useEffect(() => {
    fetch(planetURL)
      .then((res) => res.json())
      .then((json) => {
        setFilms(json.results)
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
        <h1 className='title'>Star Wars Films</h1>
        <div className="cards">
          {films.map((films, index) => (
            <FilmsThumb
            name={films.title}
            id={index + 1}
            key={films.title}
            />
            ))}
        </div>
      </div>
      )}
    </>
  )
}