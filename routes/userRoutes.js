const express = require("express");
const multer = require("multer");
const { createUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.array("images"), createUser);
router.get("/", getAllUsers);

module.exports = router;
