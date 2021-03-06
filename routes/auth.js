const express=require('express')
const router=express.Router();

const authController=require('../controller/auth')

router.get('/login',authController.getLogin);
router.post('/login',authController.postLogin)

router.get('/signin',authController.getSignin)
router.post('/signin',authController.postSignin)

router.get('/logout',(req,res)=>{
	req.session.destroy(err=>{
		if(err)
			console.log(err)
		else{
			res.redirect('/login')
		}
	})	
})
module.exports=router