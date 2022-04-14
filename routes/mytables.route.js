const express = require('express');
const router = express.Router();
const mytableController = require('../controller/mytable.controller');

router.post('/', mytableController.addmyTable);
router.get('/', mytableController.findmyTables);
router.get('/:id', mytableController.findmyTableById);
router.put('/:id', mytableController.updatemyTable);
router.delete('/:id', mytableController.deleteById);

module.exports = router;