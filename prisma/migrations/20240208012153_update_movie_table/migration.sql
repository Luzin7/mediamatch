/*
  Warnings:

  - The `movieId` column on the `favorites` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `movies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_movieId_fkey";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER;

-- AlterTable
ALTER TABLE "movies" DROP CONSTRAINT "movies_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "movies_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "movies_id_key" ON "movies"("id");

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
