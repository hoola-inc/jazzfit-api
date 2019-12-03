const EmpModel = require("../models/employee.model");

exports.createUser = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw Error('body is null');
    } else {
      const newUser = new EmpModel(req.body);
      const saveUser = await newUser.save();
      return res.status(200).json({
        status: true,
        data: saveUser
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const getAllUser = await EmpModel.find();
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
    const empId = req.params.id;
    const findUserById = await EmpModel.find({
      _id: empId
    });
    if (findUserById) {
      return res.status(200).json({
        status: true,
        data: findUserById
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "not user found by id: " + empId
      });
    }
  } catch (error) {
    next(error);
  }
};
