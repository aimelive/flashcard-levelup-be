import { PrismaClient } from "@prisma/client";
import cards from "../app/dataset";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "aimendayambaje2434@gmail.com",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      role: "ADMIN",
    },
  });
  await prisma.card.createMany({ data: cards });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
