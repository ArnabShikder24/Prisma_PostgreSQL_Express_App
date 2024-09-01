import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  const getAllUser = await prisma.user.findMany();
  console.log(getAllUser);

  // const createUser = await prisma.user.create({
  //   data: {
  //     email: "arnab1@gmail.com",
  //     name: "Arnab1"
  //   }
  // });
  // console.log(createUser);
}

main();