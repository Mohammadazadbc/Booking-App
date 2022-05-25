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
    const {min, max, ...others} = req.query
    try{

        const Hotels = await Hotle.find({...others, cheapestPrice: { $gt : min | 1, $lt:max || 999}}).limit(req.query.limit);
        res.status(200).json(Hotels)
    }
    catch(err) {
        next(err)
    }
}
export const CountByCity = async(req, res, next)=>{
    const cities = req.query.cities.split(",") ;
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotle.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }
    catch(error) {
        next(err)
    }
}

export const CountByType = async(req, res, next)=>{
    try{
        const hotelCount = await Hotle.countDocuments({type:"Hotel"})
        const apartmentCount = await Hotle.countDocuments({type:"apartment"})
        const resortCount =await Hotle.countDocuments({type:"resort"})
        const villaCount = await Hotle.countDocuments({type:"villa"})
        const cabinCount = await Hotle.countDocuments({type:"cabin"})

        res.status(200).json([
            {type:"Hotel", count: hotelCount},
            {type:"apartment", count: apartmentCount},
            {type:"resort", count: resortCount},
            {type:"villa", count: villaCount},
            {type:"cabin", count: cabinCount},
        ])
    }
  
    catch(error) {
        next(err)
    }
}