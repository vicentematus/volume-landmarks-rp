import { Prisma } from "@prisma/client";

// We are looking at https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types
// For reference.
// We get type inference using Prisma.validator and GetPayload functions.
// We get the type of MuscleGroup and Images relationship.
const muscleWithImages = Prisma.validator<Prisma.MuscleGroupArgs>()({
  include: {
    images: true,
  },
});

// This type of for each individual muscle group.
export type muscleIndividual = Prisma.MuscleGroupGetPayload<
  typeof muscleWithImages
>;

// This type is for the array of muscle groups.
export type muscleGroupWithImages = Prisma.MuscleGroupGetPayload<
  typeof muscleWithImages
>[];
