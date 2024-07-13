const express=require('express');
const {registerUser,loginUser}=require('../controllers/authController')
const router=express.Router();

router.post('/',registerUser);
router.post('/check',loginUser);

module.exports=router;