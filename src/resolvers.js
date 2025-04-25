const resolvers = {
    Query: {
        me: () => null,
        tweets: () => [],
        tweet: (_, { id }) => null,
    },
    Mutation: {
        postTweet: (_, { text }) => {
            // 임시 데이터 반환
            return {
                id: "1",
                text,
                author: {
                    id: "1",
                    username: "test",
                    email: "test@test.com",
                },
                createdAt: new Date().toISOString(),
            };
        },
        deleteTweet: (_, { id }) => true,
    },
    User: {
        tweets: (parent) => [],
    },
    Tweet: {
        author: (parent) => ({
            id: "1",
            username: "test",
            email: "test@test.com",
        }),
    },
};

module.exports = resolvers;
