import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { CharacterThumb } from "../components/CharacterThumb"
import Loader from "../components/Loader"
import { Pagination } from 'semantic-ui-react'
import { Search } from "semantic-ui-react";

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [searchList, setSearchList] = useState([])
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

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage)
    setApiUrl('https://swapi.dev/api/people/?page=' + activePage.toString())
  }

  const searchUrl = (e, searchTerm) => {
    setActivePage(1)
    setApiUrl('https://swapi.dev/api/people/?search=' + searchTerm)
  }

  const resRender = ({ name }) => (
      <span key="name">
        {name} is yo
      </span>
    );

  return (
    <>
     {loading && <Loader />}
      {!loading && (
      <div className="container">
    <Search
        fluid
        icon="search"
        placeholder="Search..."
        results={characters}
        resultRenderer={resRender}
      />
        <Link to="/">
          <button className="back-button" type="button">
            <span> ⬅</span>
          </button>
        </Link>
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
      )}
    </>
  )
}