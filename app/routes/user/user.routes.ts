import Router   from "express";
import ApiResponse  from "../../utilities/ApiResponse"
// const body = require("express-validator")
import userschema  from "../../middleware/user.middleware"
import express  from "express";
import {body,validationResult}  from "express-validator";
import usercontroller from "../../controller/usercontroller";
const router = Router();

router.post('/fetch',
     userschema.getuserId,
    usercontroller.fetchusers )


router.post('/create/user',
    // userschema.getuserId,
    usercontroller.createuser )


router.post(`/get/csvdata`, usercontroller.getcsvData)


router.post('/get/exceldata',usercontroller.getexcelData)








export default router

