import React from 'react';

const Heading = ({ text }) => {
    return (
        <div className='flex justify-center items-center mb-8 z group'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block text-center'>
                <span className='relative z-10 px-4 bg-white'>
                    {text}
                </span>
                <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300'></span>
            </h2>
        </div>
    );
};

export default Heading;