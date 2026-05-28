

const fs = require("fs");

const csv = require("csv-parser");

const RawRecord = require("../models/RawRecord");

const NormalizedRecord = require("../models/NormalizedRecord");

const normalizeData =
  require("../utils/normalizeData");

exports.uploadCSV = async (
  req,
  res
) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const results = [];

    fs.createReadStream(req.file.path)

      .pipe(csv())

      .on("data", (data) => {

        console.log("CSV ROW:", data);

        results.push(data);
      })

      .on("end", async () => {

        try {

          for (const item of results) {

            // Save Raw Record
            const rawRecord =
              await RawRecord.create({

                sourceType:
                  req.body.sourceType,

                rawData: item,
              });

            // Normalize Data
            const normalized =
              normalizeData(item);

            // Save Normalized Record
            await NormalizedRecord.create({

              rawRecordId:
                rawRecord._id,

              sourceType:
                req.body.sourceType,

              category:
                item.category,

              amount:
                Number(item.amount),

              unit:
                item.unit,

              normalizedValue:
                normalized.normalizedValue,

              status: "PENDING",

              isSuspicious:
                Number(item.amount) < 0,

              locked: false,
            });
          }

          // Delete uploaded temp file
          fs.unlinkSync(req.file.path);

          return res.status(200).json({
            message:
              "CSV Uploaded Successfully",
          });

        } catch (dbError) {

          console.log(
            "DATABASE ERROR:",
            dbError
          );

          return res.status(500).json({
            error: dbError.message,
          });
        }
      });

  } catch (error) {

    console.log(
      "UPLOAD ERROR:",
      error
    );

    return res.status(500).json({
      error: error.message,
    });
  }
};