import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Characters } from "./pages/Characters"
import { Planets } from "./pages/Planets"
import { Species } from "./pages/Species"
import { Films } from "./pages/Films"
import { FilmsDetails } from "./pages/FilmsDetails"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route path="/planets" exact>
          <Planets />
        </Route>
        <Route path="/species" exact>
          <Species />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/films/:id" exact>
          <FilmsDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}