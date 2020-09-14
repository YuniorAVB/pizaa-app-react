import { REGISTER_USER, ADD_PIZZA_TROLLEY } from './type'

export const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      }

    case ADD_PIZZA_TROLLEY:
      return {
        ...state,
        trolley: [...state.trolley,action.payload],
      }

    default:
      return state
  }
}
