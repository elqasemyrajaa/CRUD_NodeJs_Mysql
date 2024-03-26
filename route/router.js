const express=require('express');
const router=express.Router();
const UserController=require("../Controller/UserController");

router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getbyid);
router.post('/', UserController.postuser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.putUser);
module.exports=router;