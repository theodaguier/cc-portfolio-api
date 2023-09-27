const Test = require("../models/Test");
const Project = require("../models/Project");

const appController = {
  index(req, res) {
    res.json({ message: "API running" });
  },

  async test(req, res) {
    const data = await Test.create({ name: "test" });

    res.status(200).json({ message: data });
  },

  async projects(req, res) {
    const data = await Project.find();

    res.status(200).json({ message: data });
  },
};

module.exports = appController;
