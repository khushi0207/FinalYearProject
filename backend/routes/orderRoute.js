import express from 'express'
import {placeOrder,verifyStripe,placeOrderRazorpay,placeOrderStripe,allUsersOrders,updateStatus,userOrders} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
//admin privilege

orderRouter.post('/list',adminAuth,allUsersOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// payment methods

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/stripe',authUser,placeOrderStripe)

//user orders

orderRouter.post('/userorders',authUser,userOrders)


//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter