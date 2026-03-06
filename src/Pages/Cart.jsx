import React, { useContext } from "react";
import { CartContext } from "../Contex/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart } =
    useContext(CartContext);

  const handleDelete = (id) => {
    removeItem(id);
    toast.error("Item removed from cart 🗑️");
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Cart is empty!");
      return;
    }
    toast.success("Checkout Successful 🎉");
    clearCart();
  };

  const getPrice = (range) => {
    const numbers = range.match(/\d+/g);
    return numbers ? Number(numbers[0]) : 0;
  };

  const total = cart.reduce(
    (acc, item) => acc + getPrice(item.priceRange) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold">Your Cart is Empty 🛒</h2>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 border border-gray-800 p-4 rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.priceRange}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-1 border border-gray-700 rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-1 border border-gray-700 rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="text-right flex flex-col items-end gap-2">
                <p className="font-bold">
                  ৳ {getPrice(item.priceRange) * item.quantity}
                </p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border border-gray-800 p-6 rounded-xl h-fit">
          <h2 className="text-xl font-bold mb-5">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-5">
            <span>Total</span>
            <span className="font-bold">৳ {total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-purple-600 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;