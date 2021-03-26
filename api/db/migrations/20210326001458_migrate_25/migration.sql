-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "netlifyID" TEXT NOT NULL,
    "stripeID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startingAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endingAt" TIMESTAMP(3),
    "dailyPrompts" TEXT[],
    "dailyTracking" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.netlifyID_unique" ON "User"("netlifyID");

-- CreateIndex
CREATE UNIQUE INDEX "User.stripeID_unique" ON "User"("stripeID");

-- AddForeignKey
ALTER TABLE "Theme" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
