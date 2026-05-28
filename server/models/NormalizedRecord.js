const mongoose = require("mongoose");

const NormalizedRecordSchema = new mongoose.Schema(
  {
    rawRecordId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RawRecord",
    },

    sourceType: String,

    category: String,

    amount: Number,

    unit: String,

    normalizedValue: Number,

    status: {
      type: String,
      default: "PENDING",
    },

    isSuspicious: {
      type: Boolean,
      default: false,
    },

    approvedBy: String,

    locked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "NormalizedRecord",
  NormalizedRecordSchema
);