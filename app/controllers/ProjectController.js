const { Project } = require("../models");

const projectController = {
  async index(req, res) {
    const data = await Project.find();

    res.status(200).json(data);
  },

  async create(req, res) {
    const data = await Project.create(req.body);

    const { name, description, thumbnail, cover, images, year, tags } =
      req.body;

    const project = new Project({
      name,
      description,
      thumbnail,
      cover,
      images,
      year,
      tags,
    });

    res.status(200).json({ message: data });
  },

  async show(req, res) {
    const data = await Project.findById(req.params.id);

    res.status(200).json({ message: data });
  },

  async delete(req, res) {
    const data = await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: data });
  },
};

module.exports = projectController;
