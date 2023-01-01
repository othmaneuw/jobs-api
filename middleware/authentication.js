const {UnauthenticatedError} = require('../errors');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('Unauthorized to access this route');
    }

    const token = authHeader.split(' ')[1];
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.user = {id : payload.userId , name : payload.name};
        next();
    }catch(error){
       throw new UnauthenticatedError('Unauthorized to access this route');
    }

}

module.exports = authMiddleware;