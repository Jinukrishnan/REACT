import { Router } from "express";
import * as controller from './controller.js';
const router=Router()
router.route("/register").post(controller.setData);
router.route("/getdata").get(controller.getData);
router.route("/getuser/:id").get(controller.getUser);
router.route("/updateuser/:id").patch(controller.updateUser);
router.route("/deleteuser/:id").delete(controller.deleteUser);






export default router;