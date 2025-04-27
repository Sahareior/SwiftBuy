import React from 'react';
import Heading from '../../Shared/Heading';
import Cards from '../../Shared/Cards';
import { useAppContext } from '../../../Context/AppContext';

const CardShowcase = () => {
      const { user, setUser, theme, toggleTheme, loading,data } = useAppContext();
    if(loading){
        return (
            <span className="loading loading-spinner flex justify-center items-center loading-xl text-error"></span>
        )
    }
    return (
        <div className='mt-24'>
            <Heading text={'Our products'} />

<div className='grid md:grid-cols-4 justify-items-center gap-4 mt-16 gap-y-9'>
{data.map(product => (
                    <Cards  key={product.id} product={product} />
                ))}
</div>
        </div>
    );
};

export default CardShowcase;