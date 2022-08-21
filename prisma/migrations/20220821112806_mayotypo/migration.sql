/*
  Warnings:

  - You are about to drop the column `mayonaisseId` on the `Combination` table. All the data in the column will be lost.
  - You are about to drop the `Mayonaisse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mayonnaiseId` to the `Combination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Combination" DROP CONSTRAINT "Combination_mayonaisseId_fkey";

-- AlterTable
ALTER TABLE "Combination" DROP COLUMN "mayonaisseId",
ADD COLUMN     "mayonnaiseId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Mayonaisse";

-- CreateTable
CREATE TABLE "Mayonnaise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "portion" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Mayonnaise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_mayonnaiseId_fkey" FOREIGN KEY ("mayonnaiseId") REFERENCES "Mayonnaise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
