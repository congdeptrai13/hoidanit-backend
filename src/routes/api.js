const express = require("express");
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUpLoadMultipleFilesAPI, } = require("../controllers/apiController");
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer } = require("../controllers/customerController");

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUpLoadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer);

routerAPI.get('/customers', getAllCustomers);

routerAPI.put('/customers', putUpdateCustomer);

routerAPI.post('/customers-many', postCreateArrayCustomer);

module.exports = routerAPI; //export default 