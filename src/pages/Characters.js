import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { CharacterThumb } from "../components/CharacterThumb"
import Loader from "../components/Loader"
import { Search } from '../components/Search'

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1')

  useEffect(() => {
    loadData(apiUrl)
  }, [apiUrl])

  const search = searchValue => {
    setLoading(true);
    fetch('https://swapi.dev/api/people/?search=' + searchValue)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.results);
        setLoading(false);
        
      });
  }; 

  const loadData = apiUrl => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(characters.concat(json.results))
        setLoading(false)
        // Get next url
        const nextUrl = json.next
        if (nextUrl) {
          setApiUrl(nextUrl)
        }
        
        //console.log(json)
      })
      //console.log(characters)
      
  }

  return (
    <>
    {loading && <Loader />}
      {!loading && (
      <div className="container">
        <Search search={search}/>
        <Link to="/">
          <button className="back-button" type="button">
            <span> ⬅</span>
          </button>
        </Link>
        <div className='container1'>
        <div className='wrapper1'>
        <h1 className='title'>Star Wars Characters</h1>
        <div className="cards">
          {characters.map((characters, index) => (
            <CharacterThumb
              name={characters.name}
              id={index +1}
              data={characters}
              key={characters.name}
            />
          ))}
        </div>
        
        </div>
        </div>
      </div>
      )}
    </>
  )
}
