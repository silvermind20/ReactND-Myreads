import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChangeShelf extends Component {
    category = [
        { key: 0, value: "currentlyReading", display: "Currently Reading", selected: false },
        { key: 1, value: "wantToRead", display: "Want to Read", selected: false },
        { key: 2, value: "read", display: "Read", selected: false },
        { key: 3, value: "none", display: "None", selected: false }
    ]

    render() {
        const { book, books } = this.props

        let currentShelf = 'none'
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }

        return (
            <div className="book-shelf-changer">
                <select className="book-shelf-select" defaultValue={currentShelf} onChange={option => this.props.updateBookShelf(this.props.book, option.target.value)} >
                    <option value="move" disabled>Move to...</option>
                    {this.category.map(s => (
                        (s.value === book.shelf) ?
                            (<option key={s.key} value={s.value}>&#10003; {s.display}</option>) :
                            (<option key={s.key} value={s.value}>{s.display}</option>)
                    ))}
                </select>
            </div>
        )
    }
}

ChangeShelf.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default ChangeShelf