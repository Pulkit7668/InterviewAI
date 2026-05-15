const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = Router();


/** 
 * @router POST /api/auth/register
 * @description Register a new user
 * @access public
 */
authRouter.post("/register", authController.registerUserController);

/** 
 * @router POST /api/auth/login
 * @description Login a user with email and password
 * @access public
 */
authRouter.post("/login", authController.loginUserController);


/**
 * @router GET /api/auth/logout
 * @description Logout a user, clear token from user cookie and add token to blacklist
 * @access public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @router GET /api/auth/get-me
 * @description Get the current logged in user details
 * @access private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController);

module.exports = authRouter;