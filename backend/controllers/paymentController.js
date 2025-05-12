// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  // Use your Stripe secret key from .env

// // Function to create a checkout session
// const createCheckoutSession = async (req, res) => {
//   try {
//     const { cartItems, totalAmount } = req.body; // Cart items and total amount should be passed from frontend

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: cartItems.map(item => ({
//         price_data: {
//           currency: 'inr',
//           product_data: {
//             name: item.name,
//             description: item.description || "No description",
//           },
//           unit_amount: item.price * 100, // Convert price to smallest unit (e.g., cents)
//         },
//         quantity: item.quantity,
//       })),
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_URL}/success`,  // Redirect on success
//       cancel_url: `${process.env.CLIENT_URL}/cancel`,    // Redirect on cancellation
//     });

//     res.json({ url: session.url });
//   } catch (error) {
//     console.error("Error creating checkout session:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// module.exports = {
//   createCheckoutSession,
// };


const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use your Stripe secret key

const createCheckoutSession = async (req, res) => {
  try {
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map(item => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
            description: item.description || "No description",
          },
          unit_amount: item.price * 100, // price in paise
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/?redirectedFromStripe=true`, // ✅ Home page with query
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

module.exports = {
  createCheckoutSession,
};
