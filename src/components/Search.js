import React, { useState } from "react"

export const Search = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue("")
    props.search(searchValue)
  }

  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(searchValue)
    resetInputField()
  }

  return (
    <form className="search">
      <input
        className="search-field"
        value={searchValue}
        onChange={handleInputChange}
        type="text"
        placeholder="May the search be with you"
      />
      <div className="button-wrapper">
        <input
          className="search-button"
          onClick={callSearchFunction}
          type="submit"
          value="Search"
        />
        <input
          className="search-reset"
          onClick={resetInputField}
          type="reset"
          value="Reset"
        ></input>
        <img className="r2d2" src="../r2d2.png" alt="Star Wars figure" />
      </div>
    </form>
  )
}