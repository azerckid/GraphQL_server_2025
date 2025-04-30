const typeDefs = `#graphql
  """
  this is for localhost:4000/
  A user is a person who can post tweets
  """
  type User {
    id: ID!
    username: String!
    email: String!
    tweets: [Tweet!]
  }
  """
  A tweet is a message posted by a user
  """ 
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
    """
    Get the current user
    """
    me: User
    """
    Get all users
    """
    users: [User!]!
    """
    Get all tweets
    """
    tweets: [Tweet!]!
    """
    Get a tweet by id
    """
    tweet(id: ID!): Tweet
    """
    Get a user by username
    """
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

export default typeDefs;