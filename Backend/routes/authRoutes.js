const express=require('express');
const controllers=require('../controllers/authController')
const router=express.Router();

router.post('/', controllers.registerUser)
router.get('/',controllers.loginUser)

module.exports=router;
