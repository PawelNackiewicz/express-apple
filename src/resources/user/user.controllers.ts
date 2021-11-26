import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const me = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: 1 } });
  res.status(200).json({ data: user });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ data: users });
};

export const createUser = async(req: Request, res: Response) => {
  const createUser = await prisma.user.create({
    data: {
      email: 'pawi@pawi.pl',
      firstName: 'Pawi',
      lastName: 'N',
      password: 'pawipawi'
    }
  });
  res.status(200).json({ data: createUser });
};
