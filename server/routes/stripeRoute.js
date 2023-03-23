import express from "express";
import { Stripe } from "stripe";
import * as dotenv from "dotenv";

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY);
// app.use("/webhook", bodyParser.raw({ type: "*/*" }));

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { cartItems } = req.body;

    // let lineItems = [{ price: price, quantity: 1 }]; //this example is for a set price
    let line_items = cartItems.map((item) => {
      return {
        price_data: {
          unit_amount: item.price * 100,
          currency: "cad",
          product_data: {
            name: item.name,
            // description: "",
            images: [item.image],
          },
        },
        quantity: item.qty,
      };
    });

    // creating a session with the line items
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/`,
      client_reference_id: req.sessionID, // associate the session with the payment
    });
    // res.redirect(303, session.url);
    res.send({
      url: session.url,
    });
  } catch (err) {
    console.log(err.message);
  }
});

//  -------------------------------------------------------------------------------------------------------------

export default router;
