const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 사용자 생성
    const user1 = await prisma.user.create({
        data: {
            username: 'trump',
            email: 'trump@trump.com',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'elonmusk',
            email: 'elon@tesla.com',
        },
    });

    // 트윗 생성
    await prisma.tweet.create({
        data: {
            text: 'Hello, GraphQL! This is my first tweet!',
            authorId: user1.id,
        },
    });

    await prisma.tweet.create({
        data: {
            text: 'Just launched my new rocket! 🚀',
            authorId: user2.id,
        },
    });

    console.log('Seed data created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 