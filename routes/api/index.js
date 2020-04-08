const router = require("express").Router();
const searchRoute = require("./search");

router.use("/search", searchRoute);

module.exports = router;