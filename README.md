# MyReads Project

This is a basic book app where user can find the books s/he is currently reading, have read or wish to read in future. It can click to search for more books and can categorize it into the right bookshelves of: "Currently Reading", "Want to read" and already "Read". 


## Project Overlook
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app that renders two routes: home page and search page. It makes an API call to get the books user has
    ├── BooksList.js # This is a list of all the books the user currently hold which gets categorize by BookShelf component
    ├── BookShelf.js # This renders three different shelves (Currently reading, Want to read, Read) by delegating three times to the Bookshelf component  
    ├── Books.js # This is a simple component to display a book with an image thumbnail, then the book's title and a list of t's authors if exists
    ├── ChangeShelf.js # This is to change the shelf of which each book is belong to. Shows the current category of each book with a checkmark but can be changed to other shelves
    ├── Search.js # This is to renders the search bar and the search results. If found any results will be listed to a limit of 20 books but each book can be added to the three shelves in the booklist of the user
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app. Use at the discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── no-thumbnail.png # This is an image for when the search result from API doesn't have any image thumbnail 
```

### Installing

1. **Clone or download this repository**  
Change to a folder you want the app folder in. Then clone the files of this repo to a new directory and change into it: 

```console
$ git clone https://github.com/silvermind20/ReactND-Myreads MyReadsApp
$ cd MyReadsApp
```

2. **Install project dependencies**

```console
$ npm install
```

3. **Start the development server**

```console
$ npm start
```

Then point your browser to [http://localhost:3000/]() to see the app.
