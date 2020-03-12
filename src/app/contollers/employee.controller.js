const EmpModel = require("../models/employee.model");
const response = require("../../utilities/reponse.utils");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  try {
    const empId = req.body.Emp_ID;
    const getEmpData = await EmpModel.find({ empId: empId });
    if (getEmpData.length > 0) {
      res.redirect(process.env.URL + empId);
    } else {
      const newUser = new EmpModel({
        empName: req.body.Emp_Name,
        empId: empId,
        department: req.body.Department,
        email: req.body.Email,
        dateOfBirth: req.body.DOB,
        gender: req.body.Gender
      });
      const saveUser = await newUser.save();
      const token = jwtToken(req.body.Email);
      res.redirect(process.env.URL + empId);
    }

    // response.AUTHSUCCESS(res, saveUser, token);
  } catch (error) {
    next(error);
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const getAllUser = await EmpModel.find();
    if (getAllUser.length > 0) response.GETSUCCESS(res, getAllUser);
    else throw Error("no record found");
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
    if (findUserById.length > 0) response.GETSUCCESS(res, findUserById);
    else throw Error("Emp id not found " + empId);
  } catch (error) {
    next(error);
  }
};

exports.getEmpTotalAttempt = async (req, res, next) => {
  try {
    const empId = req.params.id;
    if (empId) {
      const totalAttemptsOfEmp = await EmpModel.findOne({
        empId: empId
      }).select("totalAttempt empId");

      if (totalAttemptsOfEmp) response.SUCCESS(res, totalAttemptsOfEmp);
      else throw Error("Emp id not found " + empId);
    } else {
      throw Error("employee id not found");
    }
  } catch (error) {
    next(error);
  }
};

exports.updateEmpTotalAttempt = async (req, res, next) => {
  try {
    const empId = req.params.id;
    const updateObject = req.body;
    const checkEmp = await EmpModel.findOne({ empId: empId });
    if (checkEmp && empId) {
      await EmpModel.update(
        { empId: empId },
        { $set: updateObject },
        { runValidators: true }
      );
      const data = await EmpModel.findOne({ empId: empId });
      response.SUCCESS(res, data);
    } else {
      throw Error("Emp id not found " + empId);
    }
  } catch (error) {
    next(error);
  }
};

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
      };
    } else {
      updateObject = {
        weight: weight
      };
    }
    const checkEmp = await EmpModel.findOne({ empId: empId });
    if (checkEmp && empId) {
      await EmpModel.updateOne(
        { empId: empId },
        { $set: updateObject },
        { runValidators: true }
      );
      const data = await EmpModel.findOne({ empId: empId });
      response.SUCCESS(res, data);
    } else {
      throw Error("Emp not found with id " + empId);
    }
  } catch (error) {
    next(error);
  }
};

exports.checkUser = async (req, res, next) => {
  try {
    const empId = req.params.id;
    const data = await EmpModel.find({
      empId: empId
    }).select("totalAttempt empId");

    if (data.length > 0) {
      return res.status(200).json({
        status: true,
        data: data
      });
    } else {
      return res.status(200).json({
        status: false,
        message: "no record found"
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const empId = req.params.id;
    const token = jwtToken("hoola@hoola.com");
    const data = await EmpModel.findOne({ empId: empId });
    if (data) {
      response.SUCCESS(res, token);
    } else {
      throw Error("emp not found with id " + empId);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateBody = async (req, res, next) => {
  try {
    const empId = req.params.id;
    updateObject = {
      weight: req.body.weight,
      height: req.body.height
    };
    await EmpModel.update(
      { empId: empId },
      { $set: updateObject },
      { runValidators: true }
    );
    const data = await EmpModel.findOne({ empId: empId });
    response.SUCCESS(res, data);
  } catch (error) {
    next(error);
  }
};

const jwtToken = email => {
  const payload = { email: email };
  const options = { expiresIn: "12h" };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);
  return token;
};
