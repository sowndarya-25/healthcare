const express = require("express");
const { getRiskLevel } = require("../services/riskEngine");

const router = express.Router();

router.post("/triage", async (req, res) => {
  try {
    const symptoms = req.body;

    const risk = await getRiskLevel(symptoms);

    let response = {
      risk,
      recommendation: "",
      alert: false
    };

    if (risk === 0) {
      response.recommendation = "Home care and rest. Monitor symptoms.";
    } 
    else if (risk === 1) {
      response.recommendation = "Consult a general physician.";
    } 
    else {
      response.recommendation = "Seek immediate medical attention.";
      response.alert = true;
    }

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Triage failed" });
  }
});

module.exports = router;
