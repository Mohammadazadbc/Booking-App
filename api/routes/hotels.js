import express  from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, UpdateHotel } from '../controllers/hotel.js';
import Hotle from '../modles/Hotle.js';
import { createError } from '../utils/error.js';

const router = express.Router();

// CREATE 
router.post("/", createHotel)

// UPDATE
router.put("/:id", UpdateHotel )
// DELETE

router.delete('/:id', deleteHotel)
// GET

router.get('/:id', getHotel)
// GET ALL
router.get('/', getAllHotel)

export default router