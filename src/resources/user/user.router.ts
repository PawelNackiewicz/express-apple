import { Router } from "express";
import { createUser, getAllUsers, me } from "./user.controllers";

const router = Router();

router.route("/").get(me).post(createUser);

router.get("/all", getAllUsers);

export default router;
    