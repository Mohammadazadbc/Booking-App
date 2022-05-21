import User from "../modles/User.js";



export const UpdateUser = async(req, res, next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        }, {new:true});
        res.status(200).json(updatedUser);
    }
    catch(error){
        next(err)
    }
}

export const deleteUser = async(req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
          res.status(200).json("User has been delete from list");
      }
    catch(error) {
        next(err)
    }
}

export const getUser = async(req, res, next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err) {
        next(err)
    }
}

export const getAllUser = async(req, res, next)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(error) {
        next(err)
    }
}