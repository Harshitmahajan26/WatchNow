// const express = require("express");
// const { createCheckoutSession } = require("../controllers/paymentController");

// const router = express.Router();

// // POST route for creating Stripe checkout session
// router.post("/create-checkout-session", createCheckoutSession);

// module.exports = router;



const express = require("express");
const { createCheckoutSession } = require("../controllers/paymentController");

const router = express.Router();
router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
