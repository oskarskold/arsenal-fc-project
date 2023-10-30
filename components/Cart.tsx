'use client';
import { useShoppingCart } from '../context/cartContext';
import Image from 'next/image';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const {
    cartItems,
    cartQuantity,
    getItemQuantity,
    increaseItemQuantity,
    decreaseQuantity,
    removeFromCart,
    addToCart,
    totalCartPrice,
  } = useShoppingCart();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.status === 500) return;

    const data = await response.json();
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h2>
      <div className="p-4 bg-white flex flex-col items-center">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="w-full sm:w-auto">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between mb-4 p-4 border-b border-gray-300"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="m-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">Quantity: {getItemQuantity(item._id)}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => increaseItemQuantity(item._id)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded mr-2 px-3 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded mr-2 px-3 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1"
                  >
                    <span className="text-lg font-bold">-</span>
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded md:py-1 md:px-4 lg:py-1 lg:px-4"
                  >
                    <span className="text-lg font-bold">Remove</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 flex flex-col sm:flex-row justify-between">
              <p className="text-md md:text-lg font-semibold">
                Total Items: {cartQuantity}
              </p>
              <p className="text-md md:text-lg font-semibold mt-4 sm:mt-0">
                Total Price: ${totalCartPrice()}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-block bg-green-500 text-white text-sm px-3 py-3 rounded-md uppercase hover:underline"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
