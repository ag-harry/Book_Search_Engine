const { gql } = require('apollo-server-express');

// Define type definitions using the gql tag
const typeDefs = gql`
type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
    bookCount: Int
  }
  
  type Query {
    me: User
    # Add other queries here
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: String!): User
  }
  
  type Auth {
    token: String!
    user: User
  }
  
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
`;

module.exports = typeDefs;
