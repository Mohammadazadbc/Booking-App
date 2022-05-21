import express  from 'express';
import { deleteUser, getAllUser, getUser, UpdateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/VerifyToekn.js';

const router = express.Router();

// router.get("/checkauth", verifyToken, (req,res, next)=>{
//     res.send("Your loged")
// })

// router.get("/checkuser/:id", verifyUser, (req,res)=>{
//     res.send("Your loged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin , (req,res)=>{
//     res.send("Your admin and you can delete all accounts")
// })

// UPDATE
router.put("/:id", verifyUser, UpdateUser )
// DELETE

router.delete('/:id',verifyUser, deleteUser)
// GET

router.get('/:id', verifyUser, getUser)
// GET ALL
router.get('/',verifyAdmin ,getAllUser)

export default router