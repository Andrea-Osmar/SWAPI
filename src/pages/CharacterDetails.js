import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export const CharacterDetails = (props) => {
  const [characterDetail, setcharacterDetail] = useState({})
  //const {data} = useState()
  const { id } = useParams()
  
  console.log(props)

    useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setcharacterDetail(data)
        console.log("detail", data)
      })
  }, [id])

  // useEffect(() => {
  //   setcharacterDetail(data)
  //})



  return (
    <div className="container">
      <Link to="/characters">
        <button className="back-button" type="button">
          <span> ⬅</span>
        </button>
      </Link>
      <h1 className='title'>{characterDetail.name}</h1>
      <div className="cards-info-details">
        <p className="details">Gender: {characterDetail.gender}</p>
        <p className="details">Birthyear: {characterDetail.birth_year}<br></br>  
        <span className='details-year'>(Before the Battle of Yavin)</span></p>
        <p className="details">Height: {characterDetail.height} cm</p>
      </div>
    </div>
  )
}

/*

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setcharacterDetail(data)
        console.log("detail", data)
      })
  }, [id])
*/