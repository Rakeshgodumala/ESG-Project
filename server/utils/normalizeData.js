

const normalizeData = (record) => {

  const amount = Number(record.amount);

  let normalizedValue = amount;

  let suspicious = false;

  // Convert Wh to kWh
  if (record.unit === "Wh") {

    normalizedValue = amount / 1000;
  }

  // Detect suspicious values
  if (amount < 0) {

    suspicious = true;
  }

  return {

    category:
      record.category || "GENERAL",

    amount,

    unit:
      record.unit || "unknown",

    normalizedValue,

    isSuspicious: suspicious,
  };
};

module.exports = normalizeData;









