import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // 👈 for blur effect

const Cards = ({ product }) => {
    const hasDiscount = product.is_discount && new Date(product.discount_date) > new Date();
    const currentPrice = hasDiscount ? product.price - product.discount_amount : product.price;

    return (
        <Link to={`/details/${product.id}`} state={{ product }}>
            <div className="group p-2 relative overflow-hidden md:w-[20vw] rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                
                {/* Image Container with Hover Effects */}
                <div className="relative overflow-hidden aspect-square">
                    <LazyLoadImage 
                        src={`https://admin.refabry.com/storage/product/${product.image}`}
                        alt={product.name}
                        effect="blur"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Quick Shop Button */}
                    <Link 
                        to={`/details/${product.id}`} 
                        state={{ product }}
                        className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-10 
                        group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500
                        bg-black text-white px-5 py-3 rounded-full font-medium hover:bg-gray-800
                        cursor-pointer transform-gpu focus:outline-none focus:ring-2 focus:ring-amber-400"
                        aria-label={`Quick shop ${product.name}`}
                    >
                        Quick Shop
                    </Link>

                    {/* Discount Badge */}
                    {hasDiscount && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full 
                        text-sm font-bold shadow-md">
                            50% OFF
                        </span>
                    )}
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-3">
                    <h3 className="text-sm text-[17px] font-bold text-gray-900 truncate">{product.name}</h3>

                    {/* Price Section */}
                    <div className="flex items-baseline gap-3">
                        <p className="text-xl font-extrabold text-gray-900">{currentPrice} TK</p>
                        {hasDiscount> 0 && (
                            <p className="text-lg line-through text-red-400">{product.price}</p>
                        )}
                    </div>


                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/30 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </Link>
    );
};

export default Cards;
