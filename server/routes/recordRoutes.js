const express = require("express");

const router = express.Router();

const {
  getRecords,
  approveRecord,
  lockRecord,
} = require("../controllers/recordController");

router.get("/", getRecords);

router.patch("/approve/:id", approveRecord);

router.patch("/lock/:id", lockRecord);

module.exports = router;