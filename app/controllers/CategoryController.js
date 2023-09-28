const { Category } = require("../models");

const categoryController = {
  async index(req, res) {
    const data = await Category.find();

    res.status(200).json(data);
  },

  async create(req, res) {
    const data = await Category.create(req.body);

    res.status(200).json({ message: data });
  },

  async show(req, res) {
    const data = await Category.findById(req.params.id);

    res.status(200).json({ message: data });
  },
};

module.exports = categoryController;
