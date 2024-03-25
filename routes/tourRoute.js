const express = require('express');
const tourController = require('../controller/tourController.js');
const authController = require('../controller/authController.js');
const reviewRouter = require('../routes/reviewRoute.js');
const router = express.Router();

// router.param('id', tourController.checkID);

//create a checkbody middleware
//check if body contain name and price properity
//if not send back 400

//POST /tour/f12edehdr/reviews
//GET /tour/f12edehdr/reviews

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTour);

router.route('/tour-stats').get(tourController.getTourStats);

router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('guide', 'lead-guide', 'admin'),
    tourController.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getTourWithin);
// /tours-within?distance=233&center=-40,45&unit=m1
// /tours-within/233/center/-40,45/unit/m1

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTour)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour,
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;
