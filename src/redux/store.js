import { getMeza } from '../localstorage/meza'
import { createStore, applyMiddleware, compose } from 'redux'
import { userReducer } from './reducer'
import thunk from 'redux-thunk'

const initialState = {
  meza: getMeza(),
  user: {
    name:"Yunior",
    dni:"12345678"
  },
}

const middleware = [thunk]

const composeEnhancer = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const store = createStore(
  userReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
)
