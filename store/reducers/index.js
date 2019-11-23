import { combineReducers } from 'redux'
import AuthReducer from './Auth'

const rootReducer = combineReducers({
 auth: AuthReducer,
})

export default rootReducer
