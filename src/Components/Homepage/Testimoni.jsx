import React from 'react';


const Testimoni = ({testimoni}) => {
  return (
    <div className="bg-white  md:mt-28">
      <div className="max-w-6xl mx-auto px-4">
   

   
      
            <div key={testimoni} className="card  shadow-md hover:shadow-xl transition-all duration-300">
              <div className="card-body items-center text-center">
                {/* Avatar */}
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-amber-400 ring-offset-base-100 ring-offset-2 mb-4">
                    <img src={testimoni.image} alt={testimoni.name} />
                  </div>
                </div>

                {/* User Name */}
                <h2 className="card-title text-lg font-bold">{testimoni.name}</h2>

                {/* Role */}
                <p className="text-sm text-gray-500 mb-2">{testimoni.role}</p>

                {/* testimoni Text */}
                <p className="text-gray-700 italic text-sm">{testimoni.text}</p>

                {/* Rating */}
                <div className="mt-4 flex justify-center">

                </div>
              </div>
            </div>
      
        </div>

      </div>

  );
};

export default Testimoni;
