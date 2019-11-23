import { LOGIN, LOGOUT } from '../ActionTypes'

const initialState = {
 isLoggedIn: false,
}

const auth = (state = initialState, action) => {
 switch (action.type) {
  case LOGIN:
   return {
    ...state,
    isLoggedIn: true,
   }

  case LOGOUT:
   return {
    ...state,
    isLoggedIn: false,
   }

  default:
   return state
 }
}

export default auth

export const isLoggedInSelector = ({ auth }) => auth.isLoggedIn
