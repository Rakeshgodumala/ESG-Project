const mongoose = require("mongoose");

const AuditLogSchema = new mongoose.Schema(
  {
    recordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NormalizedRecord",
    },

    action: String,

    user: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AuditLog", AuditLogSchema);