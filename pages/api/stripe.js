import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const transformedItem = req.body.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: transformedItem,
    billing_address_collection: "auto",
    success_url: `${req.headers.origin}/success/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/cancel/result?session_id={CHECKOUT_SESSION_ID}`,
    shipping_options: [
      { shipping_rate: "shr_1LH821KuXph2RUxy3dlRfPEg" },
      { shipping_rate: "shr_1LH85PKuXph2RUxyeryviTKs" },
    ],
  });
  res.json({ id: session.id });
}

export default CreateStripeSession;
