import { PrismaClient, $Enums } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  const group = await prisma.group.create({ data: { name: 'Group G' } });

  const resource = await prisma.resource.create({
    data: { name: 'Resource Y' },
  });
  const nonGroupUser = await prisma.user.create({
    data: { name: 'Erdenezul Batmunkh' },
  });
  // non group user has access to resouce Y
  await prisma.resourceSharing.create({
    data: {
      resource_id: resource.id,
      user_id: nonGroupUser.id,
      access_type: $Enums.AccessType.Direct,
    },
  });

  const groupUserWithDirectAccess = await prisma.user.create({
    data: { name: 'John Doe' },
  });

  await prisma.groupMembership.create({
    data: { group_id: group.id, user_id: groupUserWithDirectAccess.id },
  });

  await prisma.resourceSharing.create({
    data: {
      resource_id: resource.id,
      user_id: groupUserWithDirectAccess.id,
      access_type: $Enums.AccessType.Direct,
    },
  });
  await prisma.groupAccess.create({
    data: { group_id: group.id, resource_id: resource.id },
  });
};

seed().catch((error) => console.error(error));
