import React from 'react'

const CardPizza = ({ name, description, background, price }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={background} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">PIZZA PEPIRONI</h5>
        <p className="card-text">
          El pepperoni es un embutido similar al salami muy sabroso y con un
          toque picantón. Aunque parezca una palabra italiana no lo es
        </p>

        <div className="form-group ">
          <input type="number" placeholder="Cantidad" />
          <button className="mt-2 btn btn-success btn-sm btn-block">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
