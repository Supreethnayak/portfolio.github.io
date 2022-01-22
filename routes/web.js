import express from "express";
const router = express.Router()
import { homeController } from "../controllers/homeController.js";
import { contactController } from "../controllers/contactController.js";
import { projectController } from "../controllers/projectController.js";
import { skillController } from "../controllers/skillController.js";
import { educationController } from "../controllers/educationController.js";
import { certificateController } from "../controllers/certificateController.js";

router.get('/',homeController)
router.get('/services',projectController)
router.get('/skill',skillController)
router.get('/contact',contactController)
router.get('/education',educationController)
router.get('/certificate',certificateController)

export default router