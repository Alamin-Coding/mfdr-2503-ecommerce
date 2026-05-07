import { useState } from "react";

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 64 64" width="48" height="48">
    <rect x="8" y="8" width="48" height="34" rx="3" fill="#1a1a2e" stroke="#333" strokeWidth="1" />
    <rect x="10" y="10" width="44" height="30" rx="2" fill="#0d0d1a" />
    <rect x="14" y="6" width="6" height="6" rx="1" fill="#cc0000" />
    <rect x="26" y="42" width="12" height="6" fill="#333" />
    <rect x="18" y="48" width="28" height="3" rx="1" fill="#444" />
    <circle cx="14" cy="8" r="2" fill="#cc0000" />
    <line x1="16" y1="8" x2="20" y2="8" stroke="#cc0000" strokeWidth="1" />
  </svg>
);

const GamepadIcon = () => (
  <svg viewBox="0 0 64 64" width="48" height="48">
    <ellipse cx="32" cy="36" rx="24" ry="16" fill="#8B0000" />
    <ellipse cx="20" cy="34" rx="10" ry="8" fill="#6B0000" />
    <ellipse cx="44" cy="34" rx="10" ry="8" fill="#6B0000" />
    <line x1="16" y1="34" x2="24" y2="34" stroke="#fff" strokeWidth="2" />
    <line x1="20" y1="30" x2="20" y2="38" stroke="#fff" strokeWidth="2" />
    <circle cx="41" cy="31" r="2" fill="#fff" />
    <circle cx="47" cy="34" r="2" fill="#fff" />
    <circle cx="44" cy="37" r="2" fill="#fff" />
    <circle cx="38" cy="34" r="2" fill="#fff" />
    <ellipse cx="26" cy="42" rx="6" ry="3" fill="#5a0000" />
    <ellipse cx="38" cy="42" rx="6" ry="3" fill="#5a0000" />
  </svg>
);

const initialItems = [
  { id: 1, name: "LCD Monitor", price: 650, quantity: 1, icon: <MonitorIcon /> },
  { id: 2, name: "HI Gamepad",  price: 550, quantity: 2, icon: <GamepadIcon /> },
];

export default function CartPage() {
  const [items, setItems]   = useState(initialItems);
  const [coupon, setCoupon] = useState("");

  const updateQty = (id, delta) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl border-2 border-cyan-400 bg-white rounded p-6">

        {/* Table Header */}
        <div className="grid grid-cols-4 pb-3 border-b border-gray-200 text-sm font-medium text-gray-600">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Subtotal</span>
        </div>

        {/* Cart Items */}
        {items.map(item => (
          <div key={item.id} className="grid grid-cols-4 items-center py-5 border-b border-gray-100">
            {/* Product */}
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm font-medium text-gray-800">{item.name}</span>
            </div>

            {/* Price */}
            <div className="text-center text-sm text-gray-700">${item.price}</div>

            {/* Quantity Spinner */}
            <div className="flex justify-center">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden w-16">
                <span className="flex-1 text-center text-sm py-1 px-1">
                  {String(item.quantity).padStart(2, "0")}
                </span>
                <div className="flex flex-col border-l border-gray-300">
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-1 py-0.5 hover:bg-gray-100 flex items-center justify-center border-b border-gray-300"
                  >
                    <ChevronUp />
                  </button>
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-1 py-0.5 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <ChevronDown />
                  </button>
                </div>
              </div>
            </div>

            {/* Subtotal */}
            <div className="text-right text-sm font-medium text-gray-800">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <button className="border border-gray-800 text-gray-800 text-sm px-5 py-2 rounded hover:bg-gray-100 transition">
            Return To Shop
          </button>
          <button className="border border-gray-800 text-gray-800 text-sm px-5 py-2 rounded hover:bg-gray-100 transition">
            Update Cart
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">

          {/* Coupon */}
          <div className="flex gap-3 items-center flex-1">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 text-sm flex-1 outline-none focus:border-gray-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded transition whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total */}
          <div className="border border-gray-200 rounded p-5 w-full md:w-72">
            <h3 className="font-semibold text-gray-800 mb-4">Cart Total</h3>

            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-700 mb-4 pb-3 border-b border-gray-200">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-sm font-semibold text-gray-800 mb-5">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2.5 rounded transition">
              Proceed to checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
