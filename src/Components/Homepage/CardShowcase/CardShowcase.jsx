import React from 'react';
import Heading from '../../Shared/Heading';
import Cards from '../../Shared/Cards';
import { useAppContext } from '../../../Context/AppContext';

const CardShowcase = () => {
  const { user, setUser, theme, toggleTheme, loading, data } = useAppContext();

  return (
    <div className="mt-24">
      <Heading text={'Our products'} />

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <span className="loading loading-spinner loading-xl text-error"></span>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 justify-items-center gap-4 mt-16 gap-y-9">
          {data.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardShowcase;
