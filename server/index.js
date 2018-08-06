const express =  require("express");
const {ApolloServer, gql} = require("apollo-server-express");

const PORT = 4000;
const app = express();
// The GraphQL schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world'
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});



server.applyMiddleware({app});

app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    }
);
