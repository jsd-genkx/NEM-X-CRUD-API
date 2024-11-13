import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
export const router = express.Router();
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

router.post('/create-intent', createIntent);

async function createIntent (req, res) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 50000,
    currency: "thb",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};