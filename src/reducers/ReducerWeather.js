import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // state.concat returns new array therefore there is no need in using setState
      // method and then we are adding to that array the current received payload data
      // return state.concat([ action.payload.data ])

      // this is another way intead of concat with same functionallity but we push the new value in the beggining
      // by return new array with payload data and then adding other enteries from another array which is the state
      return [action.payload.data, ...state]
  }

  return state
}
