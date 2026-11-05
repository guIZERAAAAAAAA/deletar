import express, { Router } from "express"
import authmiddleware from "../middleware/auth.js"
import ControllerUser from "../ControllerUser/user.js"

const router = express.Router ()

router.get("/buscar", authmiddleware,ControllerUser.Buscar )

export default router