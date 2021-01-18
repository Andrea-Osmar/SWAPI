import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { SpeciesThumb } from "../components/SpeciesThumb"
import Loader from "../components/Loader"
import { Search } from "../components/Search"

export const Species = () => {
  const [species, setSpecies] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/species/?page=1")

  useEffect(() => {
    loadData(apiUrl)
    // eslint-disable-next-line
  }, [apiUrl])

  const search = (searchValue) => {
    setLoading(true)
    fetch("https://swapi.dev/api/species/?search=" + searchValue)
      .then((res) => res.json())
      .then((json) => {
        setSpecies(json.results)
        setLoading(false)
      })
  }

  const loadData = (apiUrl) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setSpecies(species.concat(json.results))
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
              <span> ⬅</span>
            </button>
          </Link>
          <h1 className="title">Star Wars Species</h1>
          <Search search={search} />
          <div className="cards-wrapper">
            {species.map((species, index) => (
              <SpeciesThumb
                name={species.name}
                id={index + 1}
                data={species}
                key={species.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}