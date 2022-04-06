const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");

router.route("/projects")
    .get(projectController.getProjects);

module.exports = router;