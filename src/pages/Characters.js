import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { CharacterThumb } from "../components/CharacterThumb"
import Loader from "../components/Loader"
import { Pagination } from 'semantic-ui-react'
import { Search } from '../components/Search'

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [activePage, setActivePage] = useState(1)
  const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/people/?page=1')

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setCharacters(json.results)
        setLoading(false)
        console.log(json)
      })
  }, [apiUrl]);

  const search = searchValue => {
    setLoading(true);
    fetch('https://swapi.dev/api/people/?search=' + searchValue)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.results);
          setLoading(false);
        
      });
  };
  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage)
    setApiUrl('https://swapi.dev/api/people/?page=' + activePage.toString())
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
              id={index + 1}
              key={characters.name}
            />
          ))}
        </div>
        </div>
      <Pagination 
        activePage={activePage}
        boundaryRange={5}
        firstItem={false}
        lastItem={false}
        onPageChange={onChange}
        totalPages={9}
        ellipsisItem={null}
        /> 

        </div>
      </div>
      )}
    </>
  )
}