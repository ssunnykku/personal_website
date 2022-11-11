/*
  Warnings:

  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_id` on the `post` table. All the data in the column will be lost.
  - The primary key for the `profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `profile` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_user_id_fkey`;

-- AlterTable
ALTER TABLE `post` DROP PRIMARY KEY,
    DROP COLUMN `post_id`,
    ADD COLUMN `postId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`postId`);

-- AlterTable
ALTER TABLE `profile` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `password` VARCHAR(100) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userId`);

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
