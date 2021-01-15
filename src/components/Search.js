import React from 'react'

export const Search = (props) => {

  return (
    <input type='search'
    className='search'
    placeholder={props.placeholder}
    onChange={props.handleChange}
    ></input>
  )
}

