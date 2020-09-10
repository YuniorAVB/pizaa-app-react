import { REGISTER_USER, GET_DATA } from './type'

export const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      }

    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return state
  }
}
