// Import the gql for the mutation
import gql from 'graphql-tag';

// Export the login user
export const loginUser = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Export the add user
export const addUser = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Export the save book
export const saveBook = gql`
  mutation saveBook($input: SavedBookInput!) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
        authors
        description
        id
        image
        title
        link
      }
    }
  }
`;

// Export the remove book
export const removeBook = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        authors
        description
        id
        image
        title
        link
      }
    }
  }
`;