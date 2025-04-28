const express = require('express');
const { protect } = require('../middileware/authmiddleWare');
const {accessChat,fetchChat,createGroupChat,renameGroup,addGroup,removeGroup}= require('../Controllers/chatControllers')

const router = express.Router();


router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChat);
router.route('/group').post(protect,createGroupChat);
router.route('/rename').put(protect,renameGroup);
router.route('/remove').put(protect,removeGroup);
router.route('/addGroup').put(protect,addGroup);


module.exports = router;
