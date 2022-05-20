import Hotle from "../modles/Hotle.js";

export const createHotel = async(req, res, next)=>{
    const newHotel  = new Hotle(req.body)

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(error) {
        next(err)
    }
}

export const UpdateHotel = async(req, res, next)=>{
    try{
        const updatedHotel = await Hotle.findByIdAndUpdate(req.params.id,{
            $set:req.body
        }, {new:true});
        res.status(200).json(updatedHotel);
    }
    catch(error){
        next(err)
    }
}

export const deleteHotel = async(req, res, next)=>{
    try{
        await Hotle.findByIdAndDelete(req.params.id)
          res.status(200).json("Hotel has been delete from list");
      }
    catch(error) {
        next(err)
    }
}

export const getHotel = async(req, res, next)=>{
    try{
        const HotelInfo = await Hotle.findById(req.params.id)
        res.status(200).json(HotelInfo)
    }
    catch(error) {
        next(err)
    }
}

export const getAllHotel = async(req, res, next)=>{
    try{
        const Hotels = await Hotle.find()
        res.status(200).json(Hotels)
    }
    catch(error) {
        next(err)
    }
}