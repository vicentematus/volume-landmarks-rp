import { Excercise, Prisma } from "@prisma/client";

// We are looking at https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types
// For reference.
// We get type inference using Prisma.validator and GetPayload functions.
// We get the type of MuscleGroup and Images relationship.
const Excercise = Prisma.validator<Prisma.ExcerciseSelect>();

export type ExcerciseSelect = Excercise;
// This type of for each individual muscle group.
//
//
