const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "not valid auth"
        })
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        const decodedValue = jwt.decode(token, JWT_SECRET);
    
        req.userId = decoded.userId;
        
        next();
            
    }catch(err){
        return res.status(403).json({
            message: "error validating"
        })
        }
    };

module.exports = {
    authMiddleware
};