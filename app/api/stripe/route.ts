import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';


const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' });

type Item = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};

export const POST = async (req: NextRequest) => {

  if (req.method === 'POST') {
    try {
      const body = await req.json();

      const params = {
        payment_method_types: ['card'],
        line_items: body.map((item: Item) => {
          const img = item.image
          const newImage = img
            .replace('image-', 'https://cdn.sanity.io/images/m7dvt4iq/production/')
            .replace('-webp', '.webp')
            .replace('-png', '.png')
            .replace('-jpg', '.jpg');
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
        success_url: `https://arsenal-fc-project-348a.vercel.app/success`,
        cancel_url: `https://arsenal-fc-project-348a.vercel.app/canceled`,
      };
      console.log(params, "params")
      const session = await stripe.checkout.sessions.create(params as Stripe.Checkout.SessionCreateParams);
      console.log(session, "session")

      return NextResponse.json(session, { status: 200 });
    } catch (err) {
      return NextResponse.json({ status: 500 });
    }
  }
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};