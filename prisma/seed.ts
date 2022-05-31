import { PrismaClient } from "@prisma/client";
import bcrypt from "@node-rs/bcrypt";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("rachelrox", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const posts = [
    {
      slug: "clwp",
      title: "CLWP - Clearlink WordPress",
      tag: "portfolio",
      markdown: `
What is in a name?

C - Clear 

L - Link

W - Word

P - Press

The problem was simple, we were the bottleneck. Maintaining a portfolio of sites both built and bought over the last decade was weighing down productivity.

While their strategies were quite similar, each site existed in their own vacuum, all with their own needs and individual standards of the time, if there were any to be found at all.
![Clearlink Consumer Brands Portfolio](/images/brands)

Responsible for a few hundred million organic SEO page visits each year, we were immensely proud of our work, yet we all knew what we had was unsustainable.

We met as a team to break down the issues:

Redundancy and Knowledge Wells

Our sites were slow

Poor or non-existent event tracking
Scattered SEO practices
Too much effort duplication from site to site. 90% of our time was dedicated rolling out bug fixes already completed on another site.
    `.trim(),
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
