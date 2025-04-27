//placing order using COD
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'


// gateway initializing
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// global var
const curr = "INR"
const deliveryCHarges = 15

const placeOrder = async(req,res) =>{
    try {
        const { userId, items,amount,address} = req.body;
        const orderData  = {
            userId,
            items,
            amount,
            address,
            paymentMethod :"COD",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData: {} })

        res.json({success:true,message:"Order placed successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

// using stripe
const placeOrderStripe = async(req,res) =>{

    try {
        
        const { userId, items,amount,address} = req.body;
        const {origin} = req.headers;
        const orderData  = {
            userId,
            items,
            amount,
            address,
            paymentMethod :"Stripe",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map((item)=>({
            price_data:{
                currency: curr,
                product_data:{name:item.name},
                unit_amount : item.price *100
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency: curr,
                product_data:{name: 'Delivery Charges'},
                unit_amount :  deliveryCHarges*100
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',

        })
        res.json({success:true,session_url:session.url});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
        
    }
}

//verify payment
const verifyStripe = async (req,res) => {
    const {orderId,success,userId} = req.body
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            await userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true});

        }else{
            await orderModel.findByIdAndUpdate(orderId,{payment:false})
            res.json({success:false})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//using Razorpay
const placeOrderRazorpay = async(req,res) =>{

}

// all users order for admin panel
const allUsersOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,message:"All users orders",orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// orders from users
const userOrders = async(req,res) =>{
    try {
        const { userId} =  req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
} 

// update order status

const updateStatus = async (req, res) => {
    try {
      const { orderId, status } = req.body;
      const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { status });
  
      if (!updatedOrder) {
        return res.json({ success: false, message: "Order not found" });
      }
  
      res.json({ success: true, message: "Order status updated", updatedOrder });
    } catch (error) {
      console.log("Update error:", error);
      res.json({ success: false, message: error.message });
    }
  };
  

export {placeOrder,verifyStripe,placeOrderRazorpay,placeOrderStripe,allUsersOrders,updateStatus,userOrders} 