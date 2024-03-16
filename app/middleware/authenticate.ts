import express  from 'express'
import application from "../constants/application"
import Encryption from "../utilities/Encreyption"
export default async (
     req: express.Request,
     res: express.response,
     next: express.NextFunction

 )=>{
 console.log("start of authentication")
  if(application.authorizationIgnorePath.indexOf(`${req.originalUrl}`) ==-1 ){
   console.log("in authentication")

 }

 next();


 }
