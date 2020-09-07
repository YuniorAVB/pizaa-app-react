import { getMeza } from "../localstorage/meza";
import { createStore } from "redux";
import { userReducer } from "./reducer";

const initialState = {
  meza: getMeza(),
  user: "",
};

export const store = createStore(userReducer, initialState);
