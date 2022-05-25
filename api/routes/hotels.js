import express  from 'express';
import { CountByCity, CountByType, createHotel, deleteHotel, getAllHotel, getHotel, UpdateHotel } from '../controllers/hotel.js';
import Hotle from '../modles/Hotle.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/VerifyToekn.js';

const router = express.Router();

// CREATE 
router.post("/", verifyAdmin ,createHotel)

// UPDATE
router.put("/:id",verifyAdmin , UpdateHotel )
// DELETE

router.delete('/:id',verifyAdmin , deleteHotel)
// GET

router.get('/find/:id', getHotel)
// GET ALL
router.get('/', getAllHotel)
router.get('/countByCity', CountByCity)
router.get('/countByType', CountByType)

export default router