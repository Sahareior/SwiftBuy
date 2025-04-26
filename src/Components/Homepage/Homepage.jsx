import React from 'react';
import { IoMdGlobe } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import CustomCarousel from '../Shared/Carousel';
import Sections from './Sections';
import CardShowcase from './CardShowcase/CardShowcase';
import Twobanner from './Twobanner';
import Blogs from './Blogs';

const Homepage = () => {
    const images = [
        {
        'image': 'https://img.freepik.com/free-photo/confident-ad-energized-cute-european-woman-with-curly-hairstyle-warm-beanie-stylish-sweatshir_1258-133709.jpg?t=st=1745631678~exp=1745635278~hmac=5511e83b07185c1011aadc8e370fcccc5db930564669e709e5f144d6087eb4d9&w=1380'
        },
        {
        'image': 'https://img.freepik.com/premium-photo/flat-lay-set-feminine-clothe-marine-style-mother-daughter_73558-78.jpg?w=1380'
        },
        {
        'image': 'https://img.freepik.com/free-photo/worried-nervous-cute-redhead-female-feel-anxious-pressured-before-important-interview-hold-breath-ex_1258-143152.jpg?t=st=1745631501~exp=1745635101~hmac=2261259a4729f4f48710fa01a09d486dd6d8717d7cb8fe618cc21794d61448cc&w=1380'
        }
    ]

    const iconNtext =[
        {
            icon: <MdOutlinePayment size={36}/>,
            text1: 'Secured Payment',
            text2: 'Safe & Secured Payments'
        },
        {
            icon: <GiReturnArrow size={36} />,
            text1: '30-Days Free Returns',
            text2: 'Within 30 Days for an Exchange'
        },
        {
            icon: <FaGift size={36} />,
            text1: 'Surprise Gift',
            text2: 'Free gift cards & vouchers'
        },
    ]

    const sections =[
        {
            image: 'https://foesta-demo.myshopify.com/cdn/shop/collections/collection-3_750x.png?v=1709453319',
            text: 'Kids Fashion'
        },
        {
            image: 'https://foesta-demo.myshopify.com/cdn/shop/collections/collection-1_750x.png?v=1709453366',
            text: 'Mens Fashion'
        },
        {
            image: 'https://foesta-demo.myshopify.com/cdn/shop/collections/collection-4_750x.png?v=1709453296',
            text: 'Top Sells'
        },
        {
            image: 'https://foesta-demo.myshopify.com/cdn/shop/collections/collection-2_750x.png?v=1709453343',
            text: 'Womens Fashion'
        },
    ]
    return (
        <div className='bg-white text-black'>
        {/* Hero Section */}
        <div className="md:mb-12">
            <CustomCarousel images={images} />
        </div>

        {/* Features Grid */}
        <div className="md:max-w-7xl mx-auto md:px-4 px-2 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {iconNtext.map((item, index) => (
                    <div 
                        key={index}
                        className="group p-6 border border-gray-200 rounded-lg hover:border-amber-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div className="flex gap-6 items-center">
                            <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{item.text1}</h3>
                                <p className="text-gray-600">{item.text2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Sections......................................... */}
<div className='grid md:grid-cols-4 grid-cols-1 md:mt-8 gap-y-5 justify-items-center'>
{
    sections.map(items =>(
<Sections items={items} />
    ))
}
</div>
<div className='mt-12'>
<CardShowcase />
<Twobanner />

</div>
<Blogs />
    </div>
    );
};

export default Homepage;