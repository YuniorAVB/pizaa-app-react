import React from 'react'
import ReacDOM from 'react-dom'

import './style.css'

const CardProduct = ({ handleClickClose }) => {
  return ReacDOM.createPortal(
    <div className="container-modal">
      <button className="btn btn-danger p-2 m-2 left" onClick={handleClickClose}>CERRAR</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>,
    document.getElementById('modal'),
  )
}

export default CardProduct
