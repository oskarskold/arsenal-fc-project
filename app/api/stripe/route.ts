import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' });

export const POST = async (req: NextRequest) => {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = body.map((item: {
        image: string;
        name: string;
        price: number;
        quantity: number
      }) => {
        const img = item.image;
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
      });
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      return NextResponse.json(session, { status: 200 });
    } catch (err) {
      return NextResponse.json({ status: 500 });
    }
  }
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
};