import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { CharacterDetails } from './pages/CharacterDetails'
import { Planets } from './pages/Planets'
import { PlanetsDetails } from 'pages/PlanetsDetails'
import { Species } from './pages/Species'
import { SpeciesDetails } from './pages/SpeciesDetails'
import { Films } from './pages/Films'
import { FilmsDetails } from './pages/FilmsDetails'

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
        <Route path='/characters/:id'  exact>
          <CharacterDetails />
        </Route>

        <Route path='/planets' exact>
          <Planets />
        </Route>
        <Route path='/planets/:id'>
          <PlanetsDetails />
        </Route>

        <Route path='/species' exact>
          <Species />
        </Route>
        <Route path='/species/:id' exact>
        <SpeciesDetails />
        </Route>

      <Route path='/films' exact>
      <Films />
      </Route>
      <Route path='/films/:id' exact>
        <FilmsDetails />
      </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

// TODO:
// * List all Characters -  DONE
// * Fix pagination api to display all - DONE
// * Display info about characters when clicked - DONE
// * Back button from pages - DONE
// * Search feature - filter on first and last name - DONE
// * Fix Fonts 
// * Styling
// FIXME: om tid finns
// * Add images / change api
// * Add Loader - DONE
// * Add pagenotfound
