import express from "express"
import middleware from "../middleware/auth"
import ControllerUser from "../middleware/auth.js"

const router = express.Router()

router.get("/buscar", authMiddleware, ControllerUser.Buscar )
router.get("/detalhe",authMiddleware, ControllerUser.Detalhe)
router.post("/criar",  ControllerUser.Criar) 
router.put("/alterar",authMiddleware , ControllerUser.Alterar)
router.delete("/deletar", authMiddleware, ControllerUser.Delete)

router.post("login",authMiddleware, ControllerUser.Login)

export default router