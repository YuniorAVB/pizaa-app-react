import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/loading';
import CardPizaa from '../components/cardPizaa';
import NavBar from '../components/navbar';
import FloatButton from '../components/floatButton';
import pepperoni from '../assets/img/pepperoni.webp';
import CardProduct from '../components/cardProduct';

const Pedidos = () => {
	const [ cardProductState, setCardProductState ] = useState(false);
	const [ loadingState, setLoadingState ] = useState(false);

	const {user,trolley} = useSelector((state) => ({user:state.user,trolley:state.trolley}));

	const handleClickFloatButton = () => {
		setCardProductState(true);
	};

	const hadleClickCloseCardProduct = () => {
		setCardProductState(false);
	};

	return (
		<div className="container-fluid p-0">
			<FloatButton handleClick={handleClickFloatButton} />
			{cardProductState && <CardProduct handleClickClose={hadleClickCloseCardProduct} />}
			{loadingState && <Loading />}

			<NavBar user={user} />

			<div className="row p-0 m-0">
				<div className="col-12">
					<CardPizaa trolley={trolley}  background={pepperoni} idPizza={'1'} />
				</div>
			</div>
		</div>
	);
};

export default Pedidos;
