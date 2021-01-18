import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { CharacterThumb } from "../components/CharacterThumb"
import Loader from "../components/Loader"
import { Search } from "../components/Search"

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/people/?page=1")

  useEffect(() => {
    loadData(apiUrl)
    // eslint-disable-next-line
  }, [apiUrl])

  const search = (searchValue) => {
    setLoading(true)
    fetch("https://swapi.dev/api/people/?search=" + searchValue)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json.results)
        setLoading(false)
      })
  }

  const loadData = (apiUrl) => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(characters.concat(json.results))
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
          <h1 className="title">Star Wars Characters</h1>
          <Search search={search} />
          <div className="cards-wrapper">
            {characters.map((characters, index) => (
              <CharacterThumb
                name={characters.name}
                id={index + 1}
                data={characters}
                key={characters.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}