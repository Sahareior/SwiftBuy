import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import Heading from '../Shared/Heading';

const Blogs = () => {
    return (
<div className='mt-24'>
    <Heading text={'Our Blogs'} />
<div className='grid md:grid-cols-3 grid-cols-1 gap-12 mt-16'>
<div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                    src="https://foesta-demo.myshopify.com/cdn/shop/articles/blog1_510f2033-6572-4823-918c-534ec70baa8b_720x.png?v=1713870595" 
                    alt="Inner Peace Guide" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendar className="text-amber-500" />
                    <span>Mar 30, 2025</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 leading-snug transition-colors group-hover:text-amber-600">
                    A Guide to Cultivating Inner Peace or Inner Harmony
                </h4>

                {/* Read More Button */}
                <button className="btn btn-link p-0 text-gray-600 hover:text-amber-600 gap-2 transition-all">
                    Read More
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Hover Tag */}
            <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mindfulness
            </span>
        </div>
        <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                    src="https://foesta-demo.myshopify.com/cdn/shop/articles/blog1_510f2033-6572-4823-918c-534ec70baa8b_720x.png?v=1713870595" 
                    alt="Inner Peace Guide" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendar className="text-amber-500" />
                    <span>Mar 30, 2025</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 leading-snug transition-colors group-hover:text-amber-600">
                    A Guide to Cultivating Inner Peace or Inner Harmony
                </h4>

                {/* Read More Button */}
                <button className="btn btn-link p-0 text-gray-600 hover:text-amber-600 gap-2 transition-all">
                    Read More
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Hover Tag */}
            <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mindfulness
            </span>
        </div>
        <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                    src="https://foesta-demo.myshopify.com/cdn/shop/articles/blog1_510f2033-6572-4823-918c-534ec70baa8b_720x.png?v=1713870595" 
                    alt="Inner Peace Guide" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendar className="text-amber-500" />
                    <span>Mar 30, 2025</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 leading-snug transition-colors group-hover:text-amber-600">
                    A Guide to Cultivating Inner Peace or Inner Harmony
                </h4>

                {/* Read More Button */}
                <button className="btn btn-link p-0 text-gray-600 hover:text-amber-600 gap-2 transition-all">
                    Read More
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </button>
            </div>

            {/* Hover Tag */}
            <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mindfulness
            </span>
        </div>
</div>
</div>
    );
};

export default Blogs;