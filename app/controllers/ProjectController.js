const { Project } = require("../models");

const projectController = {
  async index(req, res) {
    const data = await Project.find();

    res.status(200).json({ message: data });
  },

  async create(req, res) {
    const data = await Project.create(req.body);

    res.status(200).json({ message: data });
  },

  async show(req, res) {
    const data = await Project.findById(req.params.id);

    res.status(200).json({ message: data });
  },
};

module.exports = projectController;
