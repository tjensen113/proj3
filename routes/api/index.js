const router = require("express").Router();
const inventoryRoutes = require("./inventory");
const userRoutes = require('./user')

// Book routes
router.use("/inventory", inventoryRoutes);
router.use("/user", userRoutes)

module.exports = router;
