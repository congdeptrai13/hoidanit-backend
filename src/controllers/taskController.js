const { postCreateTaskService, getAllTaskService, deleteTaskService, putUpdateTaskSerivce } = require("../services/taskService");

module.exports = {
  postCreateTask: async (req, res) => {
    let result = await postCreateTaskService(req.body);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  },
  getAllTask: async (req, res) => {
    let result = await getAllTaskService();
    return res.status(200).json({
      EC: 0,
      data: result
    });
  },
  deleteTask: async (req, res) => {
    console.log(req.body);
    let result = await deleteTaskService(req.body.id);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  },
  putUpdateTask: async (req, res) => {
    console.log(req.body);
    let result = await putUpdateTaskSerivce(req.body);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  }
}