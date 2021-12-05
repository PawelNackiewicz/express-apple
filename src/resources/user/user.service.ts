import { PrismaClient, User } from "@prisma/client";
import { CreateUserDTO, ReadableUser, Role, UpdateUserDTO } from "./user.model";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const getReadableUser = ({ password, ...user }: User) => user;

async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function createUser(
  createUserDTO: CreateUserDTO,
  role: Role
): Promise<ReadableUser> {
  const hash = await hashPassword(createUserDTO.password);
  const createdUser = await prisma.user.create({
    data: {
      ...createUserDTO,
      password: hash,
      role,
      makretingPermission: true,
      status: 'PENDING',
    },
  });
  return getReadableUser(createdUser);
}

export async function findById(id: number): Promise<ReadableUser | null> {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function findByEmail(email: string): Promise<ReadableUser | null> {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function update(
  id: number,
  updateUserDTO: UpdateUserDTO
): Promise<ReadableUser | null> {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateUserDTO,
    },
  });
}
