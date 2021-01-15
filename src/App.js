import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { CharacterDetails } from './pages/CharacterDetails'
import { Planets } from './pages/Planets'
import { Starships } from './pages/Starships'

export const App = () => {
  return (
  <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/characters' exact>
          <Characters />
        </Route>
        <Route path='/characters/:id' exact >
          <CharacterDetails />
        </Route>
        <Route path='/planets'>
          <Planets />
        </Route>
        <Route path='/starships'>
          <Starships />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

// TODO:
// * List all Characters -  
// * Fix pagination api to display all
// * Display info about characters when clicked - DONE
// * Back button from pages - DONE
// * Search feature - filter on first and last name
// * Fix Fonts
// * Styling
// FIXME: om tid finns
// * Add images / change api
// * Add Loader
// * Add pagenotfound
// * Add Navbar