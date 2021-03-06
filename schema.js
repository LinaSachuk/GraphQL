


import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const type = `
    type Friend{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        emails: String
        contacts: [Contact]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Contact {
        firstName: String
        lastName: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput{
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        emails: String
        contacts: [ContactInput]
    }

    input ContactInput{
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
