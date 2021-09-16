import { Router } from "express";
import { SexoController } from "../controllers/SexoController";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();
const sexoController = new SexoController();

router.post("/api/usuarios", userController.create);
router.get("/api/usuarios", userController.all);
router.get("/api/usuarios/filtro", userController.search);

router.get("/api/sexo", sexoController.all);

export { router };
