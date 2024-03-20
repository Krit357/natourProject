const express = require('express');
const viewController = require('../controller/viewController');
const authController = require('../controller/authController');

const router = express.Router();

router.get('/signup', viewController.getSignUpForm);

router.use(authController.isLoggedIn);

router.get('/', viewController.getOverView);
router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.getLoginForm);

module.exports = router;
