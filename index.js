const {ApolloServer, gql} = require('apollo-server');


const typeDefs = gql`
    type Query {
        employees: [Employee],
        customers: [Customer]
}
    type Employee {
        id: ID!
        name: String
        age: Int
    },
    type Customer {
        id: ID!
        name: String
        age: Int
    }`;
const resolvers = {
    Query: {
        employees: () => {
            return [
                {id: 1, name: 'John Doe', age: 30},
                {id: 2, name: 'Jane Doe', age: 25}
            ];
        },
        customers: () => {
            return [
                {id: 1, name: 'customer 1', age: 30},
                {id: 2, name: 'customer 2', age: 25}
            ];
        },
    }
};
const gqlServer = new ApolloServer({typeDefs, resolvers});
gqlServer.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});