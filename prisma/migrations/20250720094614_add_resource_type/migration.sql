-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('Global', 'Shared');

-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "type" "ResourceType" NOT NULL DEFAULT 'Shared';
