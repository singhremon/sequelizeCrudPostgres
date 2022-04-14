const express = require('express');
const router = express.Router();
const mytableRoutes = require('./mytables.route');

router.use('/mytables', mytableRoutes);
module.exports = router;