import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes, FaTrashAlt, FaArrowLeft, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { clearCart, removeFromCart, updateQuantity } from '../../Redux/slices/cartSlice';

const CartModal = ({ isOpen, onClose }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const [isCheckoutFormOpen, setCheckoutFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    c_name: '',
    c_phone: '',
    address: '',
    courier: 'steadfast',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmitOrder = async () => {
    const product_ids = cartItems.map(item => item.id).join(',');
    const s_product_qty = cartItems.map(item => item.quantity).join(',');
    const cod_amount = cartItems.reduce((acc, item) => acc + item.total, 0);
    const delivery_charge = 80; // fixed for now

    const payload = {
      product_ids,
      s_product_qty,
      c_phone: formData.c_phone,
      c_name: formData.c_name,
      courier: formData.courier,
      address: formData.address,
      advance: null,
      cod_amount: cod_amount.toFixed(2),
      discount_amount: null,
      delivery_charge: delivery_charge.toString(),
    };

    try {
      const response = await axios.post('https://admin.refabry.com/api/public/order/create', payload);

      alert('Order placed successfully!');
      dispatch(clearCart()); 
      onClose(); 
    } catch (error) {
      console.error('Order failed:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(itemId));
    } else {
      dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <ToastContainer />
      <div className="modal bg-white modal-open">
        <div className="modal-box max-w-2xl  p-0 rounded-xl overflow-hidden relative">
          {/* Header */}
          <div className="p-6 border-b border-base-200 flex justify-between items-center">
      
            <button 
              onClick={onClose}
              className="btn btn-ghost btn-circle btn-sm hover:bg-base-200"
              aria-label="Close cart"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Content area with transition */}
          <div className="relative  w-full h-full overflow-hidden">
            <div className={`flex transition-transform duration-500 ${isCheckoutFormOpen ? '-translate-x-full' : 'translate-x-0'}`}>
              {/* Cart View */}
              <div className="w-full p-2 flex-shrink-0 ">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center py-12 gap-4">
                    <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center">
                      <FaShoppingCart className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-lg text-gray-500 font-medium">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto ">
                      {cartItems.map(item => (
                        <div 
  key={item.id}
  className="flex flex-col sm:flex-row w-full gap-4 p-2 sm:p-4 border border-base-300 rounded-xl hover:shadow-md transition-shadow"
>
  <img 
    src={`https://admin.refabry.com/storage/product/${item.image}`} 
    alt={item.name}
    className="w-full sm:w-28 h-44 sm:h-28 object-cover rounded-lg"
  />
  
  <div className="flex flex-1 flex-col justify-between">
    <div className="flex justify-between items-start">
      <div>
        <h4 className="text-base sm:text-lg font-semibold">{item.name}</h4>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Size: {item.selectedSize || 'One Size'}
        </p>
      </div>
      <button 
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-error hover:text-error/80 transition-colors ml-2"
        aria-label="Remove item"
      >
        <FaTrashAlt className="w-5 h-5" />
      </button>
    </div>

    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center  border-white border-2 font- rounded-3xl md:w-48 justify-center py-1  gap-4">
        <button
          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
           className="w-10 h-5 flex items-center justify-center text-2xl  rounded-full hover:bg-primary hover:text-white transition"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="font-mono text-sm">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
           className="w-10 h-5 flex items-center justify-center text-2xl  rounded-full hover:bg-primary hover:text-white transition"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="text-right">
        <span className="block text-xs sm:text-sm text-white">
          {item.quantity} × {item.price.toFixed(2)}
        </span>
        <span className="font-bold text-base sm:text-lg">
          {item.total.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
</div>

               
                      ))}
                    </div>

                    <div className="pt-6 md:px-5 space-y-6">
                      <div className="flex justify-between items-center text-lg font-semibold border-t border-base-200 pt-4">
                        <span>Total:</span>
                        <span className="font-mono text-xl text-primary">
                          ৳{cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between gap-4">
                        <button
                          onClick={() => setCheckoutFormOpen(true)}
                          className="btn btn-primary flex-1 gap-2"
                        >
                          <FaArrowRight className="w-4 h-4" />
                          Checkout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Checkout Form View */}
              <div className="w-full md:p-6 p-2 flex-shrink-0">
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="c_name"
                      value={formData.c_name}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <input
                      type="number"
                      name="c_phone"
                      value={formData.c_phone}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="textarea textarea-bordered w-full"
                      rows="3"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Courier</label>
                    <select
                      name="courier"
                      value={formData.courier}
                      onChange={handleInputChange}
                      className="select select-bordered w-full"
                    >
                      <option value="steadfast">Steadfast</option>
                      <option value="sundarban">Sundarban</option>
                      <option value="redx">RedX</option>
                    </select>
                  </div>

                  <div className="flex justify-between gap-4 pt-6">
                    <button
                      onClick={() => setCheckoutFormOpen(false)}
                      className="btn btn-outline flex-1 gap-2"
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      onClick={handleSubmitOrder}
                      className="btn btn-success flex-1 gap-2"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartModal;
