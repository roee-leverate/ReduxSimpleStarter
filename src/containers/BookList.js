import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul class="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // take state and map it into props.
  //what ever will return will show up as props inside of book list.
  return {books: state.books}
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever select book is called the result would dispatched using the dispatch
  // function to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
