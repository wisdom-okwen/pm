require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 9000;

// Connect to db
connectDB();

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});