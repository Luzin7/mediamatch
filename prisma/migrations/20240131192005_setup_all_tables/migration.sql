/*
  Warnings:

  - You are about to drop the column `directors` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `user_partner_id` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `partners` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[partnerId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_user_id_fkey";

-- DropForeignKey
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_user_partner_id_fkey";

-- DropForeignKey
ALTER TABLE "partners" DROP CONSTRAINT "partners_userId_fkey";

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "directors",
DROP COLUMN "genre",
DROP COLUMN "title",
DROP COLUMN "type",
DROP COLUMN "user_id",
DROP COLUMN "user_partner_id",
DROP COLUMN "year",
ADD COLUMN     "movieId" TEXT,
ADD COLUMN     "partnerId" TEXT,
ADD COLUMN     "serieId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "partners" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "partnerId" TEXT;

-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genres" TEXT[],
    "year" TEXT NOT NULL,
    "directors" TEXT[],

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genres" TEXT[],
    "year" TEXT NOT NULL,
    "directors" TEXT[],

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_id_key" ON "movies"("id");

-- CreateIndex
CREATE UNIQUE INDEX "series_id_key" ON "series"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_partnerId_key" ON "users"("partnerId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "series"("id") ON DELETE SET NULL ON UPDATE CASCADE;
