import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { FilmsThumb } from '../components/FilmsThumb'
import Loader from "../components/Loader";

export const Films = () => {
  const [films, setFilms] = useState([])
  const planetURL = "https://swapi.dev/api/films/"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(planetURL)
      .then((res) => res.json())
      .then((json) => {
        setFilms(json.results)
        setLoading(false);
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
        <h1>Star Wars Films</h1>
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