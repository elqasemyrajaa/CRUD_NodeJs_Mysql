const UserMod=require("../Model/user");
class UserController{
  
  static postuser=async(req,res,next)=>{
    try {
      
    const postResponse = await UserMod.ajouter(req.body.namee,req.body.email,req.body.passworde);
    res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  static putUser = async (req, res, next) => {
    try {
      const putResponse = await UserMod.update(req.body.namee,req.body.email,req.body.passworde,req.params.id);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  static getbyid =async(req,res,next)=>{
    try {
      const [user] = await UserMod.getbyId(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  
  }
  static getAllUsers = async (req, res, next) => {
    try {
      const [allusers] = await UserMod.fetchAll();
      res.status(200).json(allusers);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  static deleteUser = async (req, res, next) => {
    try {
      const deleteResponse = await UserMod.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
}

module.exports=UserController;