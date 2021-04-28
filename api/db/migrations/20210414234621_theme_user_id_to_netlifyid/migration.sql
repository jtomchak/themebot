-- DropForeignKey
ALTER TABLE "Theme" DROP CONSTRAINT "Theme_userId_fkey";

-- AlterTable
ALTER TABLE "Theme" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Theme" ADD FOREIGN KEY ("userId") REFERENCES "User"("netlifyID") ON DELETE CASCADE ON UPDATE CASCADE;
