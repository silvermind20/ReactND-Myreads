import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import debounce from 'lodash.debounce'


class Search extends React.Component {
    state = {
        query: '',
        newBooks: [],
        error: false
    }


    searchBook = event => {
        const query = event.target.value
        this.setState({ query })
        if (query) {
            BooksAPI.search(query.trim(), 20).then(searched => {
                if (!searched) { console.log('error', searched) }
                searched && searched.length > 0 ?
                    this.setState({ newBooks: searched, error: false }) : this.setState({ newBooks: [], error: true })
            })
        } else { this.setState({ newBooks: [], error: false }) }
    }


    render() {
        const { query, newBooks, error } = this.state
        const { books, updateBookShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" name='query' placeholder="Search by title or author"
                            value={query} onChange={this.searchBook} />
                    </div>
                </div>
                <div className="search-books-results">
                    {(query.length === 0 && !error) && (<p>Start typing in the filed above to search for a book...</p>)}
                    {newBooks.length > 0 && (
                        <ol className="books-grid">
                            {newBooks.map(book => (<Book key={book.id} books={books} book={book} updateBookShelf={updateBookShelf} />))}
                        </ol>
                    )}
                    {error && (<p>Your search keyword(s) did not found anything!</p>)}
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Search