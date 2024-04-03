import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '8ce5a5cf-797e-497b-8fbe-5e84c1a3ce60',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados(as) por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})