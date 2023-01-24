const db = require("../models");
db.mongoose
.connect(`mongodb+srv://surabhi:surabhi%40123@inventorymanagement.q1h4bka.mongodb.net/inventory_management`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Successfully connect to MongoDB.");
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});