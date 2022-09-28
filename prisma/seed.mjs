import { PrismaClient, Prisma } from "@prisma/client";
console.log(PrismaClient);
import { muscleGroups, excercises, images } from "./seed/MuscleGroup.mjs";
// const { muscleGroup, excercises, images } = require("./seed/MuscleGroup.js");
import chalk from "chalk";
const prisma = new PrismaClient();

async function main() {
  // console.log(
  //   chalk.red(
  //     "Before seeding the database, we are gonna delete all records from all tables."
  //   )
  // );
  // await prisma.muscleGroup.deleteMany();
  // console.log(chalk.red("Muscle group table deleted."));
  // await prisma.excercise.deleteMany();
  //
  // console.log(chalk.red("Excercise table deleted."));
  // await prisma.image.deleteMany();
  //
  // console.log(chalk.red("Image table deleted"));
  //
  // console.log("Muscle groups 1 es", muscleGroups[0]);
  // for (let muscle of muscleGroups) {
  //   prisma.muscleGroup.create({ data: muscle });
  // }
  //
  // for (const image of images) {
  //   console.log(chalk.yellow("Image es", image.path));
  //   prisma.image.create({ data: image });
  // }
  //
  // console.log(chalk.green("Muscle group table CREATED"));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
