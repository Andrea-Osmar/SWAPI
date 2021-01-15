import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Search } from '../components/Search'
import { CharacterThumb} from '../components/CharacterThumb'

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
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
        <Link to="/">
        <button className="back-button" type="button">
          <span> ⬅</span> Home
        </button>
      </Link>
        <Search />
          
        
        <div className="cards">
          {characters.map((characters, index) => (
            <CharacterThumb name={characters.name} id={index+1} key={characters.name}/>
          ))}
        </div>
      </div>
    </>
  )
}