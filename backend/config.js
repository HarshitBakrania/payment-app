const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.Secret_Key;

module.exports = JWT_SECRET;