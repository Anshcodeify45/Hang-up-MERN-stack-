const express = require('express');
const {sendMessage,allMessages}=require("../Controllers/messageController")
const {protect} = require('../middileware/authmiddleWare');


const router = express.Router();


router.route('/').post(protect,sendMessage);
router.route('/:chatId').get(protect,allMessages);


module.exports = router;


