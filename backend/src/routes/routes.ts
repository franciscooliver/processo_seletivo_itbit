import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

router.post("/usuarios", userController.create);
router.get("/usuarios", userController.all);

export { router };
