import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { PlanetsThumb } from "../components/PlanetsThumb"
import Loader from "../components/Loader"
import { Search } from "../components/Search"

export const Planets = () => {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/planets/?page=1")

  useEffect(() => {
    loadData(apiUrl)
    // eslint-disable-next-line
  }, [apiUrl])

  const search = (searchValue) => {
    setLoading(true)
    fetch("https://swapi.dev/api/planets/?search=" + searchValue)
      .then((res) => res.json())
      .then((json) => {
        setPlanets(json.results)
        setLoading(false)
      })
  }

  const loadData = (apiUrl) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setPlanets(planets.concat(json.results))
        setLoading(false)
        const nextUrl = json.next
        if (nextUrl) {
          setApiUrl(nextUrl)
        }
      })
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="container">
          <Link to="/">
            <button className="back-button" type="button">
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>
          </Link>
          <h1 className="title">Star Wars Planets</h1>
          <Search search={search} />
          <div className="cards-wrapper">
            {planets.map((planets, index) => (
              <PlanetsThumb
                name={planets.name}
                id={index + 1}
                data={planets}
                key={planets.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}