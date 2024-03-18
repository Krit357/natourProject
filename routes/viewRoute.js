const express = require('express');
const viewController = require('../controller/viewController');

const router = express.Router();

router.get('/', viewController.getOverView);
router.get('/tour/:slug', viewController.getTour);

module.exports = router;
