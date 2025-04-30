import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        me: () => prisma.user.findFirst(),
        users: () => prisma.user.findMany(),
        tweets: () => prisma.tweet.findMany(),
        tweet: (_, { id }) => prisma.tweet.findUnique({ where: { id } }),
        user: (_, { username }) => prisma.user.findUnique({ where: { username } }),
    },
    Mutation: {
        postTweet: async (_, { text, username, email }) => {
            // Find or create user
            let user = await prisma.user.findUnique({
                where: { username }
            });

            if (!user) {
                user = await prisma.user.create({
                    data: {
                        username,
                        email
                    }
                });
            }

            // Create tweet
            return prisma.tweet.create({
                data: {
                    text,
                    author: {
                        connect: { id: user.id }
                    }
                }
            });
        },
        deleteTweet: async (_, { id }) => {
            try {
                await prisma.tweet.delete({ where: { id } });
                return true;
            } catch (error) {
                return false;
            }
        },
        updateUser: async (_, { id, username, email }) => {
            const updateData = {};
            if (username) updateData.username = username;
            if (email) updateData.email = email;

            return prisma.user.update({
                where: { id },
                data: updateData,
            });
        },
    },
    User: {
        tweets: (parent) => prisma.tweet.findMany({
            where: { authorId: parent.id }
        }),
    },
    Tweet: {
        author: (parent) => prisma.user.findUnique({
            where: { id: parent.authorId }
        }),
    },
};

export default resolvers;
