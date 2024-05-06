-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "githubid" VARCHAR(255) NOT NULL,
    "repoUrl" VARCHAR(255) NOT NULL,
    "onlineUrl" VARCHAR(255) NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
