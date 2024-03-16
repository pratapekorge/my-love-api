import ApiResponse from "../utilities/ApiResponse";
import userservice from "../services/userservice";


const  fetchusers = async (req: any, res: any) => {

    try {
        console.log("in controller")

        let result = await userservice.fetchusers(req, res)
        console.log("result 333",result);

        ApiResponse.result(200, res, result)


    } catch (error) {
        ApiResponse.error(400, res, error)
        console.log("error")
    }


}
const  createuser = async (req: any, res: any) => {

    try {
        console.log("in controller")

        let result = await userservice.createuser(req, res)

        ApiResponse.result(200, res, result)


    } catch (error) {
        ApiResponse.error(400, res, error)
        console.log("error")
    }


}


const  getcsvData = (req:any, res:any)=>{

    try
    {
        console.log("in controller")

        let result = userservice.getcsvData(req ,res)

        ApiResponse.result(200, res, result)


    }catch(error){
        ApiResponse.error(400,res, error)
        console.log("error")
    }


}

const  getexcelData = async (req: any, res: any) => {

    try {
        console.log("in controller")

        let result = await userservice.getExcelData(req, res)
        // console.log("1212121", result);

        ApiResponse.result(200, res, result)


    } catch (error) {
        ApiResponse.error(400, res, error)
        console.log("error")
    }


}


  export default {
      getcsvData : getcsvData,
      fetchusers:fetchusers,
      getexcelData:getexcelData,
      createuser:createuser
  }
