import React,{useEffect} from 'react';
import ReacDOM from 'react-dom';
import { useSelector } from 'react-redux';

import './style.css';

const CardProduct = ({ handleClickClose }) => {
	const trolley = useSelector((state) => state.trolley);

	return ReacDOM.createPortal(
		<div className="container-modal">
			<button className="btn btn-danger p-2 m-2 left" onClick={handleClickClose}>
				CERRAR
			</button>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">NOMBRE</th>
						<th scope="col">PRECIO</th>
						<th scope="col">CANTIDAD</th>
						<th scope="col">TOTAL</th>
					</tr>
				</thead>
				<tbody>
					{trolley.map((pizza) => (
						<tr key={pizza.idPizza}>
							<th scope="row">{pizza.idPizza}</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>,
		document.getElementById('modal')
	);
};

export default CardProduct;
