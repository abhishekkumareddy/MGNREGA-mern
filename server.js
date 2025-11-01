const express = require("express");
const cors = require("cors");
const path = require("path");
const mgnregaData = require("./data/mgnregaData");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Home route
app.get("/", (req, res) => {
  res.render("index");
});

// ✅ API route with safe checks
app.get("/api/district", (req, res) => {
  const districtName = req.query.name?.toUpperCase();
  const district = mgnregaData.find(d => d.districtName.toUpperCase() === districtName);
  res.json(district || {});
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
