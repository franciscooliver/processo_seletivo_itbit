import { Router } from "express";
import { SexController } from "../controllers/SexController";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();
const sexoController = new SexController();

router.get("/", (req, res) => res.sendStatus(200));
router.post("/api/usuario", userController.create);
router.get("/api/usuario", userController.all);
router.get("/api/usuario/filtro", userController.search);
router.put("/api/usuario/:id", userController.update);
router.delete("/api/usuario/:id", userController.delete);
router.put("/api/usuario/ativo/:id", userController.enableDisableUser);

router.get("/api/sexo", sexoController.all);

export { router };
