import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//import { Filter } from '../components/Filter'

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
        <h1>Star Wars Characters</h1>
        <div className="cards">
          {characters.map((characters) => (
            <div className="cards-info" key={characters.name}>
              <h2>
                <Link to={`/character/${characters.name}`}>
                  {characters.name}
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

