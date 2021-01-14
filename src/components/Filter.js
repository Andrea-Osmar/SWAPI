import React from 'react'

export const Filter = ( OnClick ) => {

  return (

    <div className='filter-button'>
      <h3>Filter</h3>
    <div className='button-container'>
      <button
      type='button'
      className='filter-button'
      click={OnClick}
      text='First Name'
      value='firstName'
      >
      </button>
      <button
      type='button'
      className='filter-button'
      click={OnClick}
      text='Last Name'
      value='LastName'
      >
      </button>
      </div>  
    </div>
  )
}