// Import GQL from ApolloServer
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Declare the type of book
  type Book {
    authors: [String]
    description: String
    id: String!
    image: String
    title: String!
    link: String
  }

  # Declare the type of user
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  # Declare the type of Auth
  type Auth {
    token: ID!
    user: User!
  }

  # Declare the type of SavedBook
  input SavedBookInput {
    authors: [String]
    title: String!
    description: String
    image: String
    link: String
    bookId: String!
  }

  # Declare the type of Query
  type Query {
    me: User
  }

  # Declare the type of Mutation
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;