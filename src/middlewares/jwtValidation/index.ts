import { NextFunction, Request,Response } from "express"
import jwt,{JwtPayload} from "jsonwebtoken"
import { ApiError } from "../../utils/apiError"
import { userModel } from "../../models/user"
export const verifyJWT= async (req:Request,res:Response,next:NextFunction)=>{
    
    const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token) throw new ApiError(401,"Unauthorized User")

    const verifyToken=jwt.verify(token,process.env.ACCESS_JWT_KEY as string)

    const user=await userModel.findById((verifyToken as JwtPayload)?._id).select("-password -refreshToken")

    if(!user) throw new ApiError(401,"Invalid Token")

    

    next()
}