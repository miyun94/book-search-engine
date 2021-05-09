const { User, Book } = require('../models');
const { signToken } = require('../utils/auth'); 
const { AuthenticationError } = require('apollo-server-express'); 

const resolvers = {
    Query: {
        me: async(parent, args)
    }
}