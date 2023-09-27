require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./app/routers");
const errorHandlers = require("./handlers/errorHandlers");
const mongoConnexion = require("./app/database/connexion");

app.use(express.json({ limit: "1mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

mongoConnexion().then(console.log);

if (app.get("NODE_ENV") === "development") {
  app.use(errorHandlers.devErrorsCollector);
} else {
  app.use(errorHandlers.prodErrorsCollector);
}

app.set("port", process.env.PORT);
app.set("base_url", process.env.BASE_URL);

/**
 *
 * TEST DU CONTROLLER PROJECT EN CREANT UN PROJET
 * 
 * 
 * 
 * const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  coverCollage: {
    type: String,
    required: false,
    trim: true,
  },
  paper: {
    type: String,
    required: false,
    trim: true,
  },
  print: {
    type: String,
    required: false,
    trim: true,
  },
  images: {
    type: Array,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  tags: {
    type: Array,
    required: true,
    trim: true,
  },
});

 */

// const { Project } = require("./app/models");
// const projectController = require("./app/controllers/projectController");
// const project = new Project({
//   title: "Test",
//   description: "Test",
//   year: 2020,
//   tags: ["test", "test"],
//   images: ["test", "test"],
//   author: "test",
// });
// projectController.create(project);

module.exports = app;
