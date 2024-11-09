const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser
}=require("../controllers/userController");
const {JsonwebTokenError} =require("jsowebtoken");
const { validateJwtToken } = require("../middlewares/jwtAuthMiddleware");
router.post("/" , registerUser);
router.post("/login",validateJwtToken, loginUser);    
module.exports=router;