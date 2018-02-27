import React, { Component } from 'react';

import Booklist from '../containers/BookList'
import BookDetail from '../containers/BookDetails'

export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist />
        <BookDetail />
      </div>
    );
  }
}
