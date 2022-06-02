import express  from 'express';
import { createRoom, deleteRoom, getAllRoom, getRoom, UpdateRoom, UpdateRoomAvailibality } from '../controllers/room.js';
import {verifyAdmin } from "../utils/VerifyToekn.js"

const router = express.Router();

router.post("/:hotelId", verifyAdmin ,createRoom)

// UPDATE
router.put("/:id",verifyAdmin , UpdateRoom )
router.put("/availability/:id" , UpdateRoomAvailibality)
// DELETE

router.delete('/:id/:hotelId',verifyAdmin , deleteRoom)
// GET

router.get('/:id', getRoom)
// GET ALL
router.get('/', getAllRoom)

export default router