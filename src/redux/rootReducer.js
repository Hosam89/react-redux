import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceReducer from './iceCream/iceCreamrReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceReducer,
})

export default rootReducer
