const router = require("express").Router();
const inventoryRoutes = require("./inventory");

// Book routes
router.use("/inventory", inventoryRoutes);

module.exports = router;
