const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization;
}

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(403).json({
            message: "not valid auth"
        })
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET)

        if(decoded.userId){
            req.userId = decoded.userId;

            next();
        }
            
    }catch{
        return res.status(403).json({
            message: "error validating"
        })
    }

    module.exports = {
        authMiddleware
    };