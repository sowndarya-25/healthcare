const express = require("express");
const cors = require("cors");
require("dotenv").config();
//const connectDB = require("./config/db");
//connectDB();
const triageRoutes = require("./routes/triage");
app.use("/api", triageRoutes);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const { getRiskLevel } = require("./services/riskEngine");

app.post("/api/test-risk", async (req, res) => {
  try {
    const risk = await getRiskLevel(req.body);
    res.json({ risk });
  } catch (err) {
    res.status(500).json({ error: "ML service error" });
  }
});
