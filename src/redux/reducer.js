import { REGISTER_USER } from "./type";

export const userReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      console.log("ERROR NO REDUCER FOUND");
      break;
  }
};
