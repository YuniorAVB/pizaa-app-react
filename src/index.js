import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './bootstrap/bootstrap.min.css'
import { store } from './redux/store'


ReactDOM.render(<App store={store}></App>, document.getElementById('root'))
