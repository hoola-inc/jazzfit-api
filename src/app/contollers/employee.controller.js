const EmpModel = require("../models/employee.model");
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw Error('body is null');
    } else {
      const newUser = new EmpModel(req.body);
      const saveUser = await newUser.save();
      const token = jwtToken(req.body.email);
      return res.status(200).json({
        status: true,
        data: saveUser,
        jwtToken: token
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
      empId: empId
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
}


exports.getEmpTotalAttempt = async (req, res, next) => {
  try {
    const empId = req.params.id;
    if (empId) {

      const totalAttemptsOfEmp = await EmpModel.findOne({ empId: empId }).select('totalAttempt empId');

      return res.status(200).json({
        status: true,
        data: totalAttemptsOfEmp
      });

    } else {
      throw Error('employee id not found');
    }
  } catch (error) {
    next(error);
  }
}

exports.updateEmpTotalAttempt = async (req, res, next) => {
  try {
    const empId = req.params.id;
    const updateObject = req.body;
    if (empId) {
      await EmpModel.update({ empId: empId }, { $set: updateObject }, { runValidators: true });

      return res.status(200).json({
        status: true,
        message: 'Attempts updated successfully'
      });

    } else {
      throw Error('Emp id not found');
    }
  } catch (error) {
    next(error);
  }
}

const jwtToken = email => {
  const payload = { email: email };
  const options = { expiresIn: '365d' };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);
  return token;
}
