const express = require("express");
const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUpLoadMultipleFilesAPI, } = require("../controllers/apiController");
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteACustomer, deleteArrayCustomers } = require("../controllers/customerController");
const { postCreateProject, getAllProject, deleteAProject, putUpdateProject } = require("../controllers/projectController");
const { postCreateTask, getAllTask, deleteTask, putUpdateTask } = require("../controllers/taskController");

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

routerAPI.post('/projects', postCreateProject)
routerAPI.get('/projects', getAllProject);
routerAPI.delete('/projects', deleteAProject);
routerAPI.put('/projects', putUpdateProject);

routerAPI.post('/tasks', postCreateTask);
routerAPI.get('/tasks', getAllTask);
routerAPI.delete('/tasks', deleteTask);
routerAPI.put('/tasks', putUpdateTask);
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