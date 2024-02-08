/*
  Warnings:

  - You are about to drop the column `year` on the `movies` table. All the data in the column will be lost.
  - Added the required column `original_title` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "year",
ADD COLUMN     "original_title" TEXT NOT NULL,
ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vote_average" DOUBLE PRECISION NOT NULL;
