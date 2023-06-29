-- CreateTable
CREATE TABLE `User` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `profile` VARCHAR(255) NULL,
    `status` INTEGER NOT NULL,
    `statusMessage` VARCHAR(255) NULL,
    `auth` INTEGER NOT NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
