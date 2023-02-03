const express=require('express')
const { register_user } = require('../register_user')
const {login_user}=require('../login_user')
const router =express.Router()

router.route('/').post(register_user)
router.post("/login",login_user)

module.exports=router