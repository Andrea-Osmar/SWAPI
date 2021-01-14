import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

  return (

    <main>
      <div className='home-container'>
        <h1>STAR WARS </h1>
          <section className='wrapper'>
          <div className='characters-container'>
            <Link to='/characters'>
            <button className='link-button'>Characters</button>  
            </Link>
          </div>  
          <div className='planets-container'>
            <Link to='/planets'>
            <button className='link-button'>Planets</button>  
            </Link>
          </div> 
          <div className='starships-container'>
            <Link to='/starships'>
            <button className='link-button'>Starships</button>  
            </Link>
          </div> 
        </section>
      </div>
    </main>
  )
}