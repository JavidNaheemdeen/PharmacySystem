const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pharmacyRoutes = require("./routes/pharmacy.route.js");
const productRoutes = require("./routes/product.route.js");
const superadminRoutes = require("./routes/superadmin.route.js");
const userRoutes = require("./routes/user.route.js");
const prescriptionRoutes = require("./routes/prescription.route.js");
const cartRoutes = require("./routes/cart.route.js");
const orderRoutes = require("./routes/order.route.js");

const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use("/api/pharmacy", pharmacyRoutes);
app.use("/api/product", productRoutes);
app.use("/api/superadmin", superadminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/prescription", prescriptionRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
