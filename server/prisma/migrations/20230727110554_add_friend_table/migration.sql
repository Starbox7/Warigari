-- CreateTable
CREATE TABLE `Friend` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `send` VARCHAR(191) NOT NULL,
    `receive` VARCHAR(191) NOT NULL,
    `friend` INTEGER NOT NULL,
    `block` INTEGER NOT NULL,
    `sendMemo` VARCHAR(191) NULL,
    `receiveMemo` VARCHAR(191) NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
