"use client";
import { useState } from 'react';

export default function AddToCart({ bookId }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.bookId === bookId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ bookId, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="quantity" className="text-gray-700 font-medium">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          className="border rounded-md w-16 text-center"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
