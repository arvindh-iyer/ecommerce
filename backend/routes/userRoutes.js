const express=require('express')
const { register_user } = require('../register_user')
const {login_user}=require('../login_user')
const { allItems } = require('../allItems')
const {addToCart}=require('../addToCart')
const { verifyToken } = require('../verifyToken')
const {displayCart} =require('../displayCart')
const {displayPP}=require('../displayPP')
const {displayItems}=require('../displayItems')

const router =express.Router()

router.route('/').post(register_user)
router.post("/login",login_user)

router.get('/allItems',allItems)

router.post('/addToCart',addToCart)

router.post('/verifyJwt',verifyToken)

router.post('/mycart',displayCart)

router.post('/getImage',displayPP)
router.post('/displayItems',displayItems)
module.exports=router