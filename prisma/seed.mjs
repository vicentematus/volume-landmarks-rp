import { PrismaClient, Prisma } from "@prisma/client";
console.log(PrismaClient);
import { muscleGroups, excercises, images } from "./seed/MuscleGroup.mjs";
// const { muscleGroup, excercises, images } = require("./seed/MuscleGroup.js");
import chalk from "chalk";
const prisma = new PrismaClient();

// const muscleGroups = {
//   id: 0,
//   muscle: "Chest",
//   description: "Check the volume landmarks for Chest hypertrophy.",
//   MV_MIN: 4,
//   MV_MAX: 4,
//   MEV_MIN: 6,
//   MEV_MAX: 6,
//   MAV_MIN: 12,
//   MAV_MAX: 20,
//   MRV_MIN: 22,
//   MRV_MAX: 22,
//   frequency: "1.5 - 3",
//   article_url:
//     "https://renaissanceperiodization.com/chest-training-tips-hypertrophy/",
// };

async function main() {
  console.log(
    chalk.red(
      "Before seeding the database, we are gonna delete all records from all tables."
    )
  );
  await prisma.muscleGroup.deleteMany();
  console.log(chalk.red("Muscle group table deleted."));
  await prisma.excercise.deleteMany();

  console.log(chalk.red("Excercise table deleted."));
  await prisma.image.deleteMany();

  console.log(chalk.red("Image table deleted"));

  await prisma.muscleGroup.createMany({
    data: muscleGroups,
  });

  console.log(chalk.green("Muscle group table CREATED"));

  await prisma.image.createMany({
    data: images,
  });

  console.log(chalk.green("Images table CREATED"));

  await prisma.excercise.createMany({
    data: excercises,
  });

  console.log(chalk.green("Images table CREATED"));
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
