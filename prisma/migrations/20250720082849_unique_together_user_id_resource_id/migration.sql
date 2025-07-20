/*
  Warnings:

  - A unique constraint covering the columns `[user_id,resource_id]` on the table `ResourceSharing` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ResourceSharing_user_id_resource_id_key" ON "ResourceSharing"("user_id", "resource_id");
