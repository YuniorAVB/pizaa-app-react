import { REGISTER_USER, GET_DATA } from './type'
import { useDispatch } from 'react-redux'

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
})

export const getDatos = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  }
}
