import { REGISTER_USER } from "./type";

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});
