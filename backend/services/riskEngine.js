const axios = require("axios");

const getRiskLevel = async (symptoms) => {
  const response = await axios.post(
    "http://localhost:8000/predict",
    symptoms
  );
  return response.data.risk_level;
};

module.exports = { getRiskLevel };
