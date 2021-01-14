import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

export const CharacterDetails = () => {
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }, [id])

  return( <h1>This is the character details</h1>)
}