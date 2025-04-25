const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    tweets: [Tweet!]
  }

  type Tweet {
    id: ID!
    text: String!
    author: User!
    createdAt: String!
  }

  type Query {
    me: User
    tweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }

  type Mutation {
    postTweet(text: String!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
