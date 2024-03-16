import userModel from "../models/userModel";
 import formidable from 'formidable'
import fs from 'fs'
import {json} from "express";
import * as xlsx from 'xlsx'
import {header} from "express-validator";

const { Transform } = require('stream');
// import  ConnconnectDB from '../utilities/mangodbconnection'
import * as mongoose from "mongoose";

const csv = require('csv-parser');


import {MongoClient, MongoClientOptions} from 'mongodb';
var url = "mongodb://localhost:27017/";


// const fetchusers = (req : any, res:any)=>{
//      return new Promise(async (resolve, reject) => {
//
//          try {
//
//           await   MongoClient.connect(url, function(err: any, db: any) {
//                  if (err) throw err;
//                  var dbo = db.db("mylove");
//                  var myobj = { name: "Company Inc", email: "sagar@gmail.com", mobile: 9022923454, password: 1234, status :1 };
//                  dbo.collection("user").insertOne(myobj, function(err: any, res:any) {
//                      if (err) throw err;
//                      console.log("1 document inserted");
//                      db.close();
//                  });
//              });
//
//
//
//              console.log("userservice")
//              let result = userModel.fetchusers(req.body.id)
//
//              if (result) {
//                  resolve(result)
//              } else {
//                  reject("error")
//              }
//
//
//          } catch (error) {
//              resolve(error)
//          }
//
//
//      })}

const fetchusers = (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const url = 'mongodb://localhost:27017';
            //
            // // Connect to MongoDB with type assertion
            // const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } as MongoClientOptions);
            // const db = client.db("mylove");
            //
            // // Insert a document
            // const myobj = { name: "Company Inc", email: "sagar@gmail.com", mobile: 9022923454, password: 1234, status: 1 };
            // await db.collection("user").insertOne(myobj);
            // console.log("1 document inserted");
            //
            // // Close the connection
            // await client.close();

            console.log("userservice");

            // Assuming userModel is properly defined, fetch users
            let result = userModel.fetchusers(req.body.id);

            if (result) {
                resolve(result);
            } else {
                reject("error");
            }
        } catch (error) {
            reject(error);
        }
    });
};

const createuser = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {
            console.log("userservice")


            let result = await userModel.createuser(req.body)
            console.log("result222", result)

            if (result) {
                resolve(result)
            } else {
                reject("error")
            }


        } catch (error) {
            resolve(error)
        }


    })}


// Create a Transform instance


const mytransform =  new Transform({
    readableObjectMode : true,

    transform(chunk: any, encoding: any, callback:any) {

        let data= chunk.toString()
       //  let headers = data[0].split(',')
       //  console.log("headers",headers);
       // let jsonArray : any =[]
       // data.map((element: any,idx:any)=>{
       //     let object : any = {}
       //     let value= element.split(',')
       //     if(idx!=0){
       //         headers.map(((h1: any,idx2:any)=>{
       //             object[h1] = value[idx2]
       //         }))
       //
       //         jsonArray.push(object)
       //
       //         // this.push(object.toString()+'\n')


       //      }
       //
       // })
       //  console.log("jsonArray.toString()",jsonArray)
       //
       //  return jsonArray.toString()


        // console.log("111",data)
        // console.log("data",JSON.parse(data));





    }
})

const jsontransform = new Transform({

     readableObjectMode:true,
    // writableObjectMode: true,
    transform(chunk: any, encoding: any, callback: any) {

        let data : any = chunk.toString().split('\n')
        let headers  : any= data[0].split(',')
        let jsonArray : any = []
        data.map((element : any, idx: any)=>{
            let obj : any = {}
            let elementArray : any = element.split(',')
            if(idx!=0){

                headers.map((ele : any, idx2: any)=>{
                    obj[ele] = elementArray[idx2]
                })
                jsonArray.push(obj)
                this.push(JSON.stringify(obj)+'\n')
            }
        })
      // this.push(jsonArray)
     // console.log("jsonArray",jsonArray);
        callback()
    }
})


const getcsvData = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {

            // let res = fs.readFile('app/uploads/MOCK_DATA.csv',(err,data)=>{
            //      if(err){
            //          console.log("err",err)
            //
            //      }else{
            //          console.log("data",data.toJSON())
            //      }
            // })
            //     const csvFilePath = 'app/uploads/MOCK_DATA.csv'; // Path to your CSV file
            //     const jsonArray : any = [];
            //
            // let res= fs.createReadStream(csvFilePath);
            // // console.log("res", res)
            //      let res2 = fs.createWriteStream('app/uploads/MOCK_DATA13.json')
            //      let p= res.pipe(jsontransform).pipe(res2)
            //
            //     fs.createReadStream(csvFilePath)
            //         .pipe(csv())
            //         .on('data', (data: any) => jsonArray.push(data))
            //         .on('end', () => {
            //             // Convert jsonArray to JSON string
            //             const jsonData = JSON.stringify(jsonArray);
            //             // console.log("jsondata",jsonData)
            //
            //             // Write JSON data to a file
            //             fs.writeFile('data.json', jsonData, 'utf8', (err) => {
            //                 if (err) {
            //                     console.error('Error writing JSON file:', err);
            //                     return;
            //                 }
            //                 console.log('JSON file has been saved!');
            //             });
            //         });

            //   let result : any = []
            //       result = userModel.fetchusers(req.body.id)
            //
            //   let  wb =  xlsx.utils.book_new()
            //   let ws = xlsx.utils.json_to_sheet(result)
            //   xlsx.utils.book_append_sheet(wb,ws, 'sheet1')
            //   let ran = Math.random().toString(6).substring(2,6)
            //
            //   let filename = `app/uploads/${ran}.xlsx`
            //
            // let wbout =   xlsx.write(wb, {bookType: 'xlsx', type: 'buffer'})
            //  let res1= fs.promises.writeFile(filename, wbout)
            //   console.log("res1",res1)
            //
            //
            //   let result : any = []
            let result: any = await userModel.fetchusers(req.body.id);

      console.log("11111111")
            console.log("result",result)
            let wb = xlsx.utils.book_new();
            let ws = xlsx.utils.json_to_sheet(result);
            xlsx.utils.book_append_sheet(wb, ws, 'sheet1');
            let ran = Math.random().toString(36).substring(2, 6); // Use base 36 for more random strings

            let filename = `app/uploads/${ran}.xlsx`;
            console.log("2222")

            let wbout = xlsx.write(wb, {bookType: 'xlsx', type: 'buffer'});
            await fs.promises.writeFile(filename, wbout);

            console.log("File written successfully");

            let downloadUrl = `${req.protocol}://${req.get('host')}/${filename}`;
            console.log("downloadUrl",downloadUrl);
            res.status(200).json({downloadUrl: downloadUrl});
            if (result) {
                resolve(result)
            } else {
                reject("error")
            }


        } catch (error) {
            console.log("error",error)
            resolve(error)
        }


    })}

const getExcelData = (req : any, res:any)=>{
    return new Promise(async (resolve, reject) => {

        try {
            console.log("userservice")
            let fields: any;
            let reqData : any;
            let files: any;
            (reqData = await new Promise((resolve) => {


                    new formidable.IncomingForm().parse(req, (err: any, fields: any, files: any) => {
                    if (err) {
                        console.log("error", err);
                        reject(err)

                    }
                    resolve({fields: fields, files: files})

                })



            }))
            let file = reqData.files.inputfile
            // console.log("ddd",file.filepath)
            // console.log("file", Object.keys(file))
           let filepath = file.filepath
            console.log("filepath", filepath)
            let workBook = xlsx.readFile(filepath);
            // console.log("workBook",workBook);
            let sheetName= workBook.SheetNames[0]
            let sheet = workBook.Sheets[sheetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            // console.log("data", data)
         if(data.length){
             console.log("3333")
             resolve(data)
         }else{
             resolve([])
         }


        } catch (error) {
            console.log("error", error)
            resolve(error)
        }


    })}



    export  default  {
    fetchusers: fetchusers,
        getcsvData:getcsvData,
        getExcelData:getExcelData,
        createuser:createuser
    }
