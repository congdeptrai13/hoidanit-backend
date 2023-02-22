const { createProjectService, getProject, deleteProjectService, putUpdateProjectService } = require("../services/projectService");

const postCreateProject = async (req, res) => {
  let result = await createProjectService(req.body)
  return res.status(200).json({
    EC: 0,
    data: result
  });
}

const getAllProject = async (req, res) => {
  let result = await getProject(req.query);
  return res.status(200).json({
    EC: 0,
    data: result
  })
}

const deleteAProject = async (req, res) => {
  let result = await deleteProjectService(req.body);
  console.log(req.body)
  return res.status(200).json({
    EC: 0,
    data: result
  })
}

const putUpdateProject = async (req, res) => {
  let result = await putUpdateProjectService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result
  })
}

module.exports = {
  postCreateProject,
  getAllProject,
  deleteAProject,
  putUpdateProject
}