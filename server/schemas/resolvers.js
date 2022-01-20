//  Import Authendication error from Apollo Server
const { AuthenticationError } = require('apollo-server-errors');

// Import User from Models
const User = require('..models');

// Import signtoken from utils
const signToken = require('../utils/auth');

// Set the queries for database
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // Check if user is logged in
      if (!context.user) {
        throw new AuthenticationError('You are not logged in');
      }
      // Return the user
      return context.user;
    }
  },
  Mutation: {
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Email not found');
      }
      const correctPassword = await user.isValidPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    }
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        const updateduser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updateduser;
      }
      throw new AuthenticationError('You are not logged in');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updateduser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { _id: bookId } } },
          { new: true, runValidators: true }
        );
        return updateduser;
      }
      throw new AuthenticationError('You are not logged in');
    }
  }
};

module.exports = resolvers;