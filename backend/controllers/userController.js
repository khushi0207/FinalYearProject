import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}




// route for user login
const loginUser = async(req,res)=>{

    try {
        
        const {email,password} = req.body
        const user = await userModel.findOne({email})
        if(!user) return res.status(404).json({message:'User not found'})

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error) {
        res.json({success:false,message:error.message})
        
    }
}


//route for user register
const registerUser = async(req,res)=>{
   try {
     
    const {name,email,password} = req.body;
    //checking user already exists or not.--------------------
    const exists = await userModel.findOne({email})
    if(exists){
        return res.status(400).json({success:false,message:"User already exists."})
    }
    // validating email and pwd

    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter a valid email"})
    }
    if(password.length < 8){
        return res.json({success:false,message:"Please enter a strong password "})
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })
    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({success:true,message:"User created successfully",token})


   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
   }
}

//route for admin login
const adminLogin = async(req,res)=>{
    try {
        const {email,password} = req.body

        console.log("Received Email:", email);
        console.log("Received Password:", password);
        console.log("Env Email:", process.env.ADMIN_EMAIL);
        console.log("Env Password:", process.env.ADMIN_PASSWORD);
        console.log("JWT_SECRET used:", process.env.JWT_SECRET);

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email,role:"admin"},process.env.JWT_SECRET,{expiresIn:'1h'});
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid email or password"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}

export {loginUser,registerUser,adminLogin}