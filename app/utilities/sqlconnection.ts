import mysql from "mysql";


let poolconnection = mysql.createPool({
    connectionLimit: 100,
    host:"localhost",
    user:"root",
    password:"9022923275",
    database:"mylove",

})


   const  fetchquery = (sql : any, values: any)=>{
    return new Promise((resolve, reject)=>{

        poolconnection.query(sql,values,(err, results, fields)=>{
            if(err){
                console.log("error", err)
             reject(err)
            }
            console.log("connection is complete")
            console.log("results",results)
            console.log("fields", fields)
         resolve(results)
        })



    })
}
export  default  fetchquery

