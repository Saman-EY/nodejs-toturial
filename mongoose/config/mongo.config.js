const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/mongoose-tutorial";

(async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB_URL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect:", err);
  }
})();
