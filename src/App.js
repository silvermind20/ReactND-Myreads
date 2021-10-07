import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BookList'
import { Route } from 'react-router-dom'
import Search from './Search'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  updateBookShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf
      this.setState(currstate => ({
        books: currstate.books.filter(book => book.id !== changedBook.id).concat(changedBook)
      }))
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BooksList books={books} updateBookShelf={this.updateBookShelf} />
            <div className="open-search">
              <Link to="/search" className="open-search-link">Search</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (<Search books={books} updateBookShelf={this.updateBookShelf} />)} />
      </div>
    )
  }
}

export default BooksApp
