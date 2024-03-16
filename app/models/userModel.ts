import connection from "../utilities/mysqlConnection";
import fetchquery from "../utilities/sqlconnection";


  const fetchusers = async (data: any) => {
      return new Promise(async (resolve, reject) => {


          let result = await connection.query(`select * from user`, (error, result) => {
              if (error) {
                  console.log("error", error)

                  reject(error)
              }

              resolve(result)

              console.log("result", result)
          })


      })




  }


const createuser = async (data: any) => {


        return  await fetchquery(`insert into user set ? `,[data] )


}



export  default  {
      fetchusers: fetchusers,
    createuser:createuser
  }
