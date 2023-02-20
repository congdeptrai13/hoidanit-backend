const express = require("express");
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUpLoadMultipleFilesAPI, } = require("../controllers/apiController");
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteACustomer, deleteArrayCustomers } = require("../controllers/customerController");

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUpLoadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.delete('/customers-many', deleteArrayCustomers);

routerAPI.get('/info', (req, res) => {
  console.log("check query", req.query);
  return res.status(200).json({
    data: req.query
  })
});

routerAPI.get('/info/:name/:address', (req, res) => {
  console.log("check req.params", req.params);
  return res.status(200).json({
    data: req.params
  })
});


module.exports = routerAPI; //export default 