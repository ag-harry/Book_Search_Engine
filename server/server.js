const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../graphQL/typeDefs');
const resolvers = require('../graphQL/resolvers');
const authMiddleware = require('./utils/auth');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(authMiddleware);

// create an instance of ApolloServer and pass it the typeDefs and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req.context,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
