import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


const BookShelf = props => {
    const { books, updateBookShelf } = props

    return (
        <ol className="books-grid">
            {books.map(book => (<Book key={book.id} books={books} book={book} updateBookShelf={updateBookShelf} />))}
        </ol>
    )
}


BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf