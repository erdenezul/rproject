-- CreateTable
CREATE TABLE "group_access" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "resource_id" TEXT NOT NULL,

    CONSTRAINT "group_access_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "group_access" ADD CONSTRAINT "group_access_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_access" ADD CONSTRAINT "group_access_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
