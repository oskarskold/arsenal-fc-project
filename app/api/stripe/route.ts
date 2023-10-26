import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', {apiVersion: '2023-10-16'});

export const config = {
  api: {
    bodyParser: true,
  },
};

 export const POST = async (req: NextRequest) => {
  if (req.method === 'POST') {
    console.log(req.body);
    try {
      console.log('stripe', stripe, process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      const body = await req.json();
      console.log('body', body)
      const params = {
        payment_method_types: ['card'],
        line_items: body.map((item) => {
          const img = item.image
          const newImage = img
            .replace('image-', 'https://cdn.sanity.io/images/m7dvt4iq/production/')
            .replace('-webp', '.webp')
            .replace('-png', '.png')
            .replace('-jpg', '.jpg');
          console.log('image', newImage);
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      return NextResponse.json(session, { status: 200 });
    } catch (err) {
      return  NextResponse.json({ message: err.message }, { status: 500 });
  } 
}
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};
