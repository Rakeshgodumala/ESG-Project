const NormalizedRecord = require("../models/NormalizedRecord");

const AuditLog = require("../models/AuditLog");

exports.getRecords = async (req, res) => {
  const records = await NormalizedRecord.find();

  res.json(records);
};

exports.approveRecord = async (req, res) => {
  const record = await NormalizedRecord.findById(
    req.params.id
  );

  record.status = "APPROVED";

  record.approvedBy = "Analyst";

  await record.save();

  await AuditLog.create({
    recordId: record._id,
    action: "APPROVED",
    user: "Analyst",
  });

  res.json(record);
};

exports.lockRecord = async (req, res) => {
  const record = await NormalizedRecord.findById(
    req.params.id
  );

  record.locked = true;

  await record.save();

  await AuditLog.create({
    recordId: record._id,
    action: "LOCKED",
    user: "Analyst",
  });

  res.json(record);
};