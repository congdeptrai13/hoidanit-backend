const Task = require("../models/task")
const postCreateTaskService = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let result = await Task.create(data);
    return result;
  }
}
const getAllTaskService = async () => {
  let result = await Task.find({});
  return result;
}
const deleteTaskService = async (id) => {
  let result = await Task.deleteById(id);
  return result;
}
const putUpdateTaskSerivce = async (data) => {
  let result = await Task.updateOne({ _id: data.id }, { ...data });
  return result;
}
module.exports = {
  postCreateTaskService,
  getAllTaskService,
  deleteTaskService,
  putUpdateTaskSerivce

}
