

 export  default class  ApiResponse {

  public static  result = (status,
              res,
              result
              )=>{

        res.json({status ,message:"success", result})

    }

    static error = (status, res, result)=>{
      res.json({status, message:"Error",result} )

    }






}

