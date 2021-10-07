import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


const BooksList = props => {
    const { books, updateBookShelf } = props
    const shelves = [
        { type: 'currentlyReading', title: 'Currently Reading' },
        { type: 'wantToRead', title: 'Want to Read' },
        { type: 'read', title: 'Read' }
    ]

    return (
        <div className="list-books-content">
            {shelves.map((shelf, index) => {
                const booksShelf = books.filter(book => book.shelf === shelf.type)
                return (
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <BookShelf books={booksShelf} updateBookShelf={updateBookShelf} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BooksList