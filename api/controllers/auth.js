import User from "../modles/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export const register = async(req,res,next)=>{

    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = await new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        }) 
        await newUser.save();
        res.status(200).json("User has been created")
       }
    catch(err){
        next(err)
    }
}

export const login = async(req,res, next)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) return next( createError(404, "user not founded"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next( createError(404, "user not founded"))
        const {password, isAdmine, ...otherDetails} = user._doc;
        res.status(200).json({...otherDetails});
        
    }
    catch {
        next(err)
    }
}