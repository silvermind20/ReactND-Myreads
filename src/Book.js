import React from 'react'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'
import noThumbnail from './no-thumbnail.png';


const Book = props => {
    const { book, books, updateBookShelf } = props
    const bookTitle = book.title ? book.title : 'No title'
    const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noThumbnail;

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }} />
                    <ChangeShelf books={books} book={book} updateBookShelf={updateBookShelf} />
                </div>
                <div className="book-title"><p>{bookTitle}</p></div>
                <div className="book-authors">
                    {book.authors && book.authors.map((author, index) => (
                        <span key={index}>{author}<br></br></span>
                    ))}
                </div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book