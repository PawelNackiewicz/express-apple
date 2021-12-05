import { Router } from "express";
import { register } from "./auth.controllers";

const router = Router();

router.post("/users", register);

// router.post("/sessions", login);
// router.get("/sessions/me", getUserInfo);
// router.get("/confirm", confirmUser);
// router.post("/forgotPassword", forgotPassword);
// router.patch("/changePassword", changePassword);

export default router;
    