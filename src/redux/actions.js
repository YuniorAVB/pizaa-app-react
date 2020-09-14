import { REGISTER_USER, ADD_PIZZA_TROLLEY } from './type';

export const registerUser = (user) => ({
	type: REGISTER_USER,
	payload: user
});

export const addPizzaTrolley = (pizza) => ({
	type: ADD_PIZZA_TROLLEY,
	payload: pizza
});
