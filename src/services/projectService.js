const Project = require("../models/project");
const aqp = require('api-query-params');

const createProjectService = async (data) => {
  try {
    if (data.type === "EMPTY-PROJECT") {
      let result = await Project.create(data);
      return result
    }
    if (data.type === "ADD-USERS") {
      console.log("check data:", data);
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.push(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    if (data.type === "REMOVE-USERS") {
      console.log("check data:", data);
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.usersArr.length; i++) {
        myProject.usersInfor.pull(data.usersArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    if (data.type === "ADD-TASKS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.taskArr.length; i++) {
        myProject.tasks.push(data.taskArr[i]);
      }
      let newResult = await myProject.save();
      return newResult;
    }
    return null;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
}

const getProject = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  console.log("before ", filter);
  delete filter.page;
  console.log("after ", filter);

  let offset = (page - 1) * limit;
  let result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();

  return result;
}
const deleteProjectService = async (data) => {
  try {
    let result = Project.deleteOne({ id: data.id })
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

const putUpdateProjectService = async (data) => {
  try {
    let result = await Project.updateOne({ id: data.id }, { name: data.name, endDate: data.endDate, description: data.description });
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
module.exports = {
  createProjectService,
  getProject,
  deleteProjectService,
  putUpdateProjectService
}