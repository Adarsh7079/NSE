import { Router } from "express";
import {getdata, putdata} from "../controller/user.controller.js"


const router=Router()

router.route("/get").get(getdata)
router.route("/save").post(putdata)

export default router