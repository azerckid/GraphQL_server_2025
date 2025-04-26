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

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    users: [User!]!
    tweets: [Tweet!]!
    tweet(id: ID!): Tweet
    user(username: String!): User
  }

  type Mutation {
    login(username: String!, password: String!): AuthPayload!
    postTweet(text: String!, username: String!, email: String!): Tweet!
    deleteTweet(id: ID!): Boolean!
    updateUser(id: ID!, username: String, email: String): User!
  }

  scalar DateTime
`;

module.exports = typeDefs;
