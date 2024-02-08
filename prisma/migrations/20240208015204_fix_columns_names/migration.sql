/*
  Warnings:

  - You are about to drop the column `vote_average` on the `movies` table. All the data in the column will be lost.
  - Added the required column `vote_average ` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "vote_average",
ADD COLUMN     "vote_average " DOUBLE PRECISION NOT NULL;
