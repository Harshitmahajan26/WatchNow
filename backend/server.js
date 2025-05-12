// backend/server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import stripeModule from 'stripe';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import newCollectionRoutes from './routes/newCollectionRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Stripe setup
const stripe = stripeModule(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));
app.use(bodyParser.json());

// Serve static product images
app.use('/images', express.static('Assets'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/new-collections', newCollectionRoutes);

// Create Stripe checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { cartItems } = req.body;

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // amount in paisa
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
