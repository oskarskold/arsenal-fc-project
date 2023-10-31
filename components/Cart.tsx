'use client';
import { useShoppingCart } from '../context/cartContext';
import Image from 'next/image';
import getStripe from '../lib/getStripe';
import Link from 'next/link';

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
    isCartOpen,
    toggleCart,
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
      <div className="flex">
        {isCartOpen && (
          <div
            className="fixed top-0 right-0 h-screen w-5/5 bg-white shadow-lg p-4 sm:w-5/5 md:w-3/5 lg:w-3/5 xl:w-4/12 overflow-y-auto z-50 "
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex justify-between items-center m-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleCart}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-semibold uppercase">Cart</h1>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between mb-4 p-4 border-b border-gray-300"
                  >
                    <Link href={`/products/${item.slug}`} key={item._id}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={100}
                        className="mr-4"
                      />
                    </Link>
                    <div className="m-4">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">
                        Quantity: {getItemQuantity(item._id)}
                      </p>
                      <p className="text-gray-600">Price: ${item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => increaseItemQuantity(item._id)}
                        className="bg-green-500 hover:bg-green-600 text-white rounded mr-2 w-8 min-w-0"
                      >
                        <span className="text-lg font-bold">+</span>
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="bg-red-500 hover:bg-red-600 text-white  rounded mr-2 w-8 min-w-0"
                      >
                        <span className="text-lg font-bold">-</span>
                      </button>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded"
                      >
                        <span className="text-lg font-bold">Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mt-6 flex justify-between">
                  <p className="text-lg font-semibold">Total Items: {cartQuantity}</p>
                  <p className="text-lg font-semibold">
                    Total Price: ${totalCartPrice()}
                  </p>
                </div>
                <div className="flex justify-center mt-6 mb-20">
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
        )}
      </div>
    </div>
  );
};

export default Cart;
