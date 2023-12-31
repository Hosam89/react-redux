import { BUY_ICECREAM } from './iceCreamType'

const initialState = {
  numOfIceCreams: 20,
}

const iceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      }

    default:
      return state
  }
}

export default iceReducer
