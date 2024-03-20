const express = require('express');
const viewController = require('../controller/viewController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/signup', viewController.getSignUpForm);

router.get('/', authController.isLoggedIn, viewController.getOverView);
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/account', authController.protect, viewController.getAccount);

module.exports = router;
