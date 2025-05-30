import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector(state => state.cart?.items || []);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenCartModal = () => setIsCartModalOpen(true);
  const handleCloseCartModal = () => setIsCartModalOpen(false);

  return (
    <div>
      <div className="navbar backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-md  top-0 z-50">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl font-bold text-primary hover:scale-105 transition-transform">
            Swift<span className="text-secondary">Buy</span>
          </Link>
        </div>

        <div className="flex-none gap-9">
          {/* Cart Button */}
          <button
            className="btn btn-ghost btn-circle md:mr-5 mr-1 hover:bg-primary hover:text-white transition-colors"
            onClick={handleOpenCartModal}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cart.length > 0 && (
                <span className="badge badge-sm bg-secondary text-white border-none indicator-item animate-ping-once">
                  {cart.length}
                </span>
              )}
            </div>
          </button>

          {/* Avatar Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:scale-110 transition-transform">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white dark:bg-gray-700 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge badge-primary">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
    </div>
  );
};

export default Navbar;
