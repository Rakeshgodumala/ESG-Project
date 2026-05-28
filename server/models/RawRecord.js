const mongoose = require("mongoose");

const RawRecordSchema = new mongoose.Schema(
  {
    sourceType: {
      type: String,
      enum: ["SAP", "UTILITY", "TRAVEL"],
    },

    rawData: Object,

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RawRecord", RawRecordSchema);