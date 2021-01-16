import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { CharacterThumb } from "../components/CharacterThumb"

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const peopleURL = "https://swapi.dev/api/people/"

  useEffect(() => {
    fetch(peopleURL)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json.results)
        console.log(json)
      })
  }, [])

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="back-button" type="button">
            <span> ⬅</span>
          </button>
        </Link>
        <h1>Star Wars Characters</h1>
        <div className="cards">
          {characters.map((characters, index) => (
            <CharacterThumb
              name={characters.name}
              id={index + 1}
              key={characters.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}
