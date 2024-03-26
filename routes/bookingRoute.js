const express = require('express');
const bookingController = require('../controller/bookingController.js');
const authController = require('../controller/authController.js');

const router = express.Router();

router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession,
);

module.exports = router;
