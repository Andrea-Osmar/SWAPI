import React from "react"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main>
      <div className="home-container">
        <img className="logo" src="../starWars.png" alt="Star Wars Logo" />
        <section className="wrapper">
          <Link to="/characters">
            <button className="link-button">Characters</button>
          </Link>
          <Link to="/planets">
            <button className="link-button">Planets</button>
          </Link>
          <Link to="/species">
            <button className="link-button">Species</button>
          </Link>
          <Link to="/films">
            <button className="link-button">Films</button>
          </Link>
        </section>
      </div>
    </main>
  )
}