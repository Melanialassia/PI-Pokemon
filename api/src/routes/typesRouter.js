const { Router } = require("express");
const router = Router();
const { getTypesHandler } = require('../handlers/getTypesHandler');

router.use("/", getTypesHandler);

module.exports = router;