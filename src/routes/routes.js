import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from '../views/home'
import Pedidos from '../views/pedidos'

const Routes = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/pedidos" exact>
          <Pedidos></Pedidos>
        </Route>
      </BrowserRouter>
    </Provider>
  )
}

export default Routes
