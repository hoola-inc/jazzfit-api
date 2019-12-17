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
    if (findUserById.length > 0) {
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

      if (totalAttemptsOfEmp) {
        return res.status(200).json({
          status: true,
          data: totalAttemptsOfEmp
        });
      } else {
        return res.status(200).json({
          status: false,
          message: 'no record found'
        });
      }

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
    const checkEmp = await EmpModel.findOne({ empId: empId });
    if (checkEmp && empId) {
      await EmpModel.update({ empId: empId }, { $set: updateObject }, { runValidators: true });
      const data = await EmpModel.findOne({ empId: empId });
      return res.status(200).json({
        status: true,
        data: data
      });

    } else {
      throw Error('Emp id not found ' + empId);
    }
  } catch (error) {
    next(error);
  }
}

exports.updateEmpWeight = async (req, res, next) => {
  try {
    const empId = req.params.id;
    let updateObject = {};
    const weight = req.body.weight;

    if (req.file) {
      const fileName = req.file.filename;
      const imageUrl = process.env.URL + fileName;
      updateObject = {
        weight: weight,
        empImage: imageUrl
      }
    } else {
      updateObject = {
        weight: weight
      }
    }
    const checkEmp = await EmpModel.findOne({ empId: empId });
    if (checkEmp && empId) {
      await EmpModel.updateOne({ empId: empId }, { $set: updateObject }, { runValidators: true });
      const data = await EmpModel.findOne({ empId: empId });
      return res.status(200).json({
        status: true,
        data: data
      });

    } else {
      throw Error('Emp id not found ' + empId);
    }
  } catch (error) {
    next(error);
  }
}

exports.checkUser = async (req, res, next) => {
  try {
    const empId = req.params.id;
    const data = await EmpModel.find({
      empId: empId
    }).select('totalAttempt empId');

    if (data.length > 0) {
      return res.status(200).json({
        status: true,
        data: data
      });
    } else {
      return res.status(200).json({
        status: false,
        message: 'no record found'
      });
    }
  } catch (error) {
    next(error);
  }
}

exports.refreshToken = async (req, res, next) => {
  const empId = req.params.id;
  const token = jwtToken('hoola@hoola.com');
  const data = await EmpModel.findOne({ empId: empId });
  if(data) {
    return res.status(200).json({
      status: true,
      token: token
    });
  } else {
    return res.status(200).json({
      status: false,
      message: 'emp not exist ' + empId
    })
  }
  
}

const jwtToken = email => {
  const payload = { email: email };
  const options = { expiresIn: '12h' };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);
  return token;
}
