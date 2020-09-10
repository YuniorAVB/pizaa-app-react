import React from 'react'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

const FloatButton = ({ handleClick }) => {
  return (
    <div className="float ">
      <button onClick={handleClick} className="float__button">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  )
}

export default FloatButton
