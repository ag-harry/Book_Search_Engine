const { Book, User } = require('../server/models');

const resolvers = {
    Query: {
        me: async (_, __, context) => {
            // Ensure the user is authenticated before returning user data
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
            throw new Error('Not logged in');
        },
    },

    Mutation: {
        login: async (_, { email, password }) => {
            // Perform user login logic and return the token and user data
            // Implementation depends on your authentication mechanism
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('Incorrect credentials');
            }

            const correctPassword = await User.isCorrectPassword(password);

            if (!correctPassword) {
                throw new Error('Incorrect credentials');
            }

            // generate a token
            const token = signToken(user);

            // Return the token and user data
            return {
                token,
                user,
            };
        },

        addUser: async (_, { username, email, password }) => {
            // Perform user registration logic, create a new user, and return the token and user data
            // Implementation depends on your requirements

            const user = await User.create({ username, email, password });

            // generate a token
            const token = signToken(user);

            // Return the token and user data
            return {
                token,
                user,
            };
        },

        saveBook: async (_, { bookData }, context) => {
            // Ensure the user is authenticated before saving the book
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { savedBooks: bookData } },
                    { new: true }
                );
                return user;
            }
            throw new Error('Not logged in');
        },
        removeBook: async (_, { bookId }, context) => {
            // Ensure the user is authenticated before removing the book
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
                return user;
            }
            throw new Error('Not logged in');
        },
    },
};

module.exports = resolvers;

