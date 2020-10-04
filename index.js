import express from 'express';
// import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});


const root = {
    friend: () => {
        return {
            "id": 28718992,
            "firstName": "Manny",
            "lastName": "Henri",
            "gender": "Male",
            "language": "English",
            "email": "me@me.com"
        }
    }
};

const { graphqlHTTP } = require('express-graphql');



app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))



app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));