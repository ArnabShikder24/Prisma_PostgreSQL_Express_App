import express  from "express"
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/getAllUser", UserController.getAllUser);
router.post("/create-update-profile", UserController.insertOrUpdateProfile);

export const userRouter = router;