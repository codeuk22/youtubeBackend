import { Router } from "express";
import { registerUser } from "../../controllers/user/index";
import { upload } from "../../middlewares/multer/index";
import { validateUserRegister } from "../../middlewares/joiValidation/index";

const router = Router();

router.post("/register",validateUserRegister,upload.fields([{ name: "avatar", maxCount: 1 }, { name: "coverImage", maxCount: 1 }]),registerUser)


export default router
