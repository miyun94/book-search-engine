const { gql } = require('apollo-server-express'); 

const typeDefs = gql`
    type Query {
        // me which returns a user type
        me: User
    }, 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(bookId: ID!): User
    }, 

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }, 

    type Book {
        //id returned from the google's book api???
        bookId: 
        authors: [String]
        description: String
        title: String
        image: 
        link: 
    }, 

    type Auth{
        token: ID!
        user: User
    }
`;
