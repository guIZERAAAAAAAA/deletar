import jwt from "jsonwebtoken"
import { verify } from "node:crypto"

const SEGR3DO = "batata123"

export default function middleware(req,rex,next)
{
    try {
        
        const token = req.headers["authorization"]
        if(!token){
            throw new Error()
        }

        const decoded = jwt = verify (token,SEGR3DO)
    req.session = decoded
    next()
    } catch (error) {
        rex.send({message:"Usuario ou senha invalido "})
    }
}