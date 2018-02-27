export function selectBook(book) {
    //select book is an action creator, it need to return an
    //action (object with type property and payload[]data about the action)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
