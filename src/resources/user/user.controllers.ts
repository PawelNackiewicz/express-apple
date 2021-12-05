import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export const me = async (req: Request, res: Response) => {
  //get data from token
  const user = await prisma.user.findUnique({ where: { id: 1 } });
  res.status(200).json({ data: user });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ data: users });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const createdUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
      },
    });
    res.status(200).json({ data: createdUser });
  } catch (e) {
    next(e);
  }
};
