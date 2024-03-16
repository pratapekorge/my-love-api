import mysql from 'mysql'

 const connection = mysql.createConnection({

     host:"localhost",
     user:"root",
     password:"9022923275",
     database:"mylove",

 })
connection.connect((error,data)=>{
    if(error){
        console.log("connection failed")
    }else{
        console.log("connection is established")
    }

})


export default  connection





