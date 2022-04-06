const express = require("express");
const formController = require("../controller/formController");
const router = express.Router();

router.route("/submitform")
    .post(formController.sendForm);

module.exports = router;