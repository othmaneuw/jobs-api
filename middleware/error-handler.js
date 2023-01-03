const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //set default
    statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg : err.message || 'Something went wrong , try again'
  }
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  if(err.name === 'CastError'){
    customError.msg = `No job found with the id ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.errors).map(item=>item.message).join(',');
    customError.statusCode = 400;
  }

  if(err.code || err.code === 11000){
    customError.msg = `Duplicated value for the field ${Object.keys(err.keyValue)}`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg : customError.msg });
}

module.exports = errorHandlerMiddleware
