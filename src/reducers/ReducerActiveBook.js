export default function(state = null, action) { // the state of this reducer and the action that was called

  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  //base case if we dont care about the action
  return state
}
