-- CreateTable
CREATE TABLE "MuscleGroup" (
    "id" SERIAL NOT NULL,
    "muscle" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'N/A',
    "MV_MIN" INTEGER NOT NULL,
    "MV_MAX" INTEGER NOT NULL,
    "MEV_MIN" INTEGER NOT NULL,
    "MEV_MAX" INTEGER NOT NULL,
    "MAV_MIN" INTEGER NOT NULL,
    "MAV_MAX" INTEGER NOT NULL,
    "MRV_MIN" INTEGER NOT NULL,
    "MRV_MAX" INTEGER NOT NULL,
    "frequency" TEXT,
    "article_url" TEXT,

    CONSTRAINT "MuscleGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Excercise" (
    "id" SERIAL NOT NULL,
    "muscleGroupId" INTEGER,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "axis" TEXT,

    CONSTRAINT "Excercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "muscleGroupId" INTEGER,
    "path" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MuscleGroup_muscle_key" ON "MuscleGroup"("muscle");

-- AddForeignKey
ALTER TABLE "Excercise" ADD CONSTRAINT "Excercise_muscleGroupId_fkey" FOREIGN KEY ("muscleGroupId") REFERENCES "MuscleGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_muscleGroupId_fkey" FOREIGN KEY ("muscleGroupId") REFERENCES "MuscleGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
