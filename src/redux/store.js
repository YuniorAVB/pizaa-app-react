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
  trolley:[]

}

const middleware = [thunk]

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose 

export const store = createStore(
  userReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
)
