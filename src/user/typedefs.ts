export interface UserResource {
  resourceId: string;
  accessType: string;
}

export interface UserWithResourceCount {
  userId: string;
  count: number;
}
