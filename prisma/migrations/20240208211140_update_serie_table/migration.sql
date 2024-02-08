/*
  Warnings:

  - The `serieId` column on the `favorites` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `series` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `series` table. All the data in the column will be lost.
  - The `id` column on the `series` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `original_title` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average ` to the `series` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_serieId_fkey";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "serieId",
ADD COLUMN     "serieId" INTEGER;

-- AlterTable
ALTER TABLE "series" DROP CONSTRAINT "series_pkey",
DROP COLUMN "year",
ADD COLUMN     "original_title" TEXT NOT NULL,
ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vote_average " DOUBLE PRECISION NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "series_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "series_id_key" ON "series"("id");

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
