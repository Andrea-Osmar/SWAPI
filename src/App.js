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
        <Route path='/characters'>
          <Characters />
        </Route>
        <Route path='/characters/name' >
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