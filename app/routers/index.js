const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const { catchErrors } = require("../../handlers/errorHandlers");
const { projectController, categoryController } = require("../controllers");

router.get("/", appController.index);

router.get("/test", catchErrors(projectController.index));

router.get("/projects", catchErrors(projectController.index));

router.get("/projects/:id", catchErrors(projectController.show));

router.post("/projects", catchErrors(projectController.create));

router.put("/projects/:id", catchErrors(projectController.update));

router.delete("/projects/:id", catchErrors(projectController.delete));

router.get("/categories", catchErrors(categoryController.index));

router.get("/categories/:id", catchErrors(categoryController.show));

router.post("/categories", catchErrors(categoryController.create));

router.put("/categories/:id", catchErrors(categoryController.update));

router.delete("/categories/:id", catchErrors(categoryController.delete));

module.exports = router;
