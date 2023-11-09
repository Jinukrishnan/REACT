import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/add").post(controller.addUser);
router.route("/display").get(controller.displayUser);
router.route("/film/:id").post(controller.filmData);

export default router;

