const UserModel = require("../../models/user.model");

exports.createUser = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      console.log(" Body id null ");
    } else {
      const newUser = new UserModel(req.body);
      const saveUser = await newUser.save();
      if (saveUser) {
        return res.status(200).json({
          status: true,
          data: saveUser
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const getAllUser = await UserModel.find();
    console.log(getAllUser);
    if (getAllUser.length > 0) {
      return res.status(200).json({
        status: true,
        length: getAllUser.length,
        data: getAllUser
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "not record found"
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const findUserById = await UserModel.find({
      _id: userId
    });
    if (findUserById) {
      return res.status(200).json({
        status: true,
        data: findUserById
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "not user found by id: " + userId
      });
    }
  } catch (error) {
    next(error);
  }
};
