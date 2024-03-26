/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import { loadStripe } from '@stripe/stripe-js';
export const bookTour = async (tourId) => {
  console.log('this is ', typeof tourId);
  var stripe = loadStripe(
    'pk_test_51Oy8JRJd7KVUq6zKDcbkYrynpFRQSqeTda8E2HqXRFgezVTcYYesr9NBSkX88TZPC7DCda3yybkKLoMYAJBRFbYK00Ne2suhXx',
  );

  try {
    // 1) Get Checkout session
    const response = await axios.get(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
    );
    const session = response.data.session;

    // 2) Redirect to checkout form
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error');
  }
};
