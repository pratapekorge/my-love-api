import express from "express";
 import authenticate from "../middleware/authenticate";

import bodyParser from "body-parser";

import application from "../constants/application";

import indexRoutes from "../routes";
import cors from 'cors';

const app = express();


app.options('*', cors()) // include before other routes

app.use(bodyParser.json())
app.use(function (req,res,next) {
 res.header("Access-Control-Allow-Origin","*")
 res.header("Access-Control-Allow-Methods",'DELETE, PUT, GET, POST')
 res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
 next();
})


   // app.use(authenticate)


app.use(application.url.base, indexRoutes)

export  default app












