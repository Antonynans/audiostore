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

  // if (req.method === "POST") {
  //   try {
  //     const params = {
  //       submit_type: "pay",
  //       mode: "payment",
  //       payment_method_types: ["card"],
  //       billing_address_collection: "auto",
  //       shipping_options: [
  //         { shipping_rate: "shr_1LH821KuXph2RUxy3dlRfPEg" },
  //         { shipping_rate: "shr_1LH85PKuXph2RUxyeryviTKs" },
  //       ],
  //       line_items: req.body.map((item) => {
  //         return {
  //           price_data: {
  //             currency: "usd",
  //             product_data: {
  //               name: item.name,
  //               images: item.image.mobile,
  //             },
  //             unit_amount: item.price * 100,
  //           },
  //           adjustable_quantity: {
  //             enabled: true,
  //             minimum: 1,
  //           },
  //           quantity: item.quantity,
  //         };
  //       }),
  //       success_url: redirectURL + 'status=success',
  //       cancel_url: redirectURL + 'status=cancel',
  //     };

  //     // Create Checkout Sessions from body params.
  //     const session = await stripe.checkout.sessions.create(params);
  //     // res.json({ id: session.id})

  //     res.status(200).json(session);
  //   } catch (err) {
  //     res.status(err.statusCode || 500).json(err.message);
  //   }
  // } else {
  //   res.setHeader("Allow", "POST");
  //   res.status(405).end("Method Not Allowed");
  // }
}

export default CreateStripeSession;
