# Module 21 - MERN - Book Search Engine

<h1 align="center">
    <a href="https://module21.herokuapp.com/" target="_blank">
    View Demo
    </a>
</h1>
<div align="center">
    <img src="./src/images/screenshot.jpg" width="600px">
</div>

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Contributing](./CONTRIBUTING.md)
- [License](./LICENSE)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Theme](#theme)

## About <a name = "about"></a>

This is a fully functional Google Books API search engine. It was created with Resful API and I refactored it to the GraphQL API build with Apollo Server.

## Getting Started <a name = "getting_started"></a>

### User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

```

### Acceptance Criteria

```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

### Prerequisites
- [MERN](https://www.mongodb.com/mern-stack)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)

### Installing

1. Clone this repo.
2. Navigate to repo folder.
3. Navigate to client folder.
4. Run `npm install`
5. Run `npm run start`
6. Open the browser and navigate to 'http://localhost:3000/'