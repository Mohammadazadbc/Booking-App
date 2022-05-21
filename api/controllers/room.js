import Room from "../modles/Room.js";
import Hotle from "../modles/Hotle.js";
import { createError } from "../utils/error.js"


export const createRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotle.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id} })
        }
        catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)

    }
    catch(err){
        next(err)
    }
}




export const UpdateRoom = async(req, res, next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{
            $set:req.body
        }, {new:true});
        res.status(200).json(updatedRoom);
    }
    catch(error){
        next(err)
    }
}

export const deleteRoom = async(req, res, next)=>{
    const hotelId = req.params.hotelId;
    try{
        await Room.findByIdAndDelete(req.params.id)
          res.status(200).json("Hotel has been delete from list");
          try{
            await Hotle.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id} })
        }
        catch(err){
            next(err)
        }
      }
    catch(error) {
        next(err)
    }
}

export const getRoom = async(req, res, next)=>{
    try{
        const HotelRoom = await Room.findById(req.params.id)
        res.status(200).json(HotelRoom)
    }
    catch(error) {
        next(err)
    }
}

export const getAllRoom = async(req, res, next)=>{
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }
    catch(error) {
        next(err)
    }
}