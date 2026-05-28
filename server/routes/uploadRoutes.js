const express = require("express");

const router = express.Router();

const upload =
  require("../middleware/uploadMiddleware");

const {
  uploadCSV,
} = require("../controllers/uploadController");

router.post(
  "/csv",
  upload.single("file"),
  uploadCSV
);

module.exports = router;