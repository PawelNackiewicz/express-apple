import { NextFunction, Request, Response } from "express";
import { CreateUserDTO } from "../user/user.model";
import { createUser } from "../user/user.service";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, firstName, lastName, password } = req.body;
  const createUserDTO: CreateUserDTO = {
    email,
    firstName,
    lastName,
    password,
  };
  try {
    const createdUser = await createUser(createUserDTO, "USER");
    // send confirmation mail
    res.status(200).json({ data: createdUser });
  } catch (e) {
    console.error(e);
    next();
  }
}
