import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaTrolley } from '../../redux/actions';

const CardPizza = ({ trolley, idPizza, name, description, background, price }) => {
	const [ quantityPizza, setQuantityPizza ] = useState(1);

	const dispatch = useDispatch();

	const handleSubmitAddTrolley = () => {
		const exitsPizza = trolley.find((pizza) => pizza.idPizza == idPizza);
		if (exitsPizza) {
			console.log('si existe');
		}

		dispatch(addPizzaTrolley({ idPizza, quantityPizza }));

		
	};

	return (
		<div className="card" style={{ width: '18rem' }}>
			<img className="card-img-top" src={background} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">PIZZA PEPIRONI</h5>
				<p className="card-text">
					El pepperoni es un embutido similar al salami muy sabroso y con un toque picantón. Aunque parezca
					una palabra italiana no lo es
				</p>

				<div className="form-group ">
					<input
						value={quantityPizza}
						type="number"
						onChange={(e) => setQuantityPizza(e.target.value)}
						className="w-100"
						placeholder="Cantidad"
					/>
					<button onClick={handleSubmitAddTrolley} className="mt-2 btn btn-success btn-sm btn-block">
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardPizza;
