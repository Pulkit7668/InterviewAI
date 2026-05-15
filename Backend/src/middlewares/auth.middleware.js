const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
    const token = req.cookies.token;

    if(!token) {
        console.log('[AUTH] No token found in cookies');
        console.log('[AUTH] Available cookies:', Object.keys(req.cookies));
        return res.status(401).json({
            message: "Unauthorized, token not provided"
        })
    }

    const isTokenBlacklisted = await tokenBlacklistModel.findOne({token})

    if(isTokenBlacklisted) {
        console.log('[AUTH] Token is blacklisted');
        return res.status(401).json({
            message: "Unauthorized, token is invalid"
        })
    }

    try {
        const decoded =  jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (error) {
        console.log('[AUTH] JWT verification failed:', error.message);
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    
}


module.exports = { authUser };