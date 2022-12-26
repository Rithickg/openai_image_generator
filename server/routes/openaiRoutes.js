const express=require('express');
const router =express.Router();
const {generateImage,textCompletion} = require('../controllers/openaiController')



router.post('/generateimage',generateImage);
router.post('/textcompletion',textCompletion);

module.exports=router;