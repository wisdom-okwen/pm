require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 9000;

// Server
const app = express();

// Connect to db
connectDB();

app.use(cors());

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