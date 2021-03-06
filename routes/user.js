const express=require('express')
const router=express.Router();
const Post=require('../model/Post')

const userController= require('../controller/user');


router.get('/',userController.getIndex)

router.get('/notices',userController.getNotices)

router.post('/notices/:notice_id',userController.getNoticeDetail)
router.get('/download-notice/:id',userController.getNoticeDownload)

router.get('/photos',userController.getPhotos)

router.get('/profile',userController.getUserProfile)

router.post('/profile',userController.postUserProfile)


router.get('/archieve/:id',userController.getNoticeSaved)
router.get('/archieve',userController.getArchieve)
module.exports=router