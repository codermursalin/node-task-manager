const customError=require('../services/customError');
const errorHandler=(err,req,res,next)=>{
    let status=500;
    let data={
        message:'internal server error'
    };

    if(err instanceof customError){
        status=err.status;
        data={
            message:err.message
        };
    }
    res.status(status).json(data);
}
module.exports=errorHandler;