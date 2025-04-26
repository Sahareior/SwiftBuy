import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaTshirt, FaTruck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../Redux/slices/cartSlice';
// import { addCart } from '../../Redux/dataSlice';

const Details = () => {
    const { state } = useLocation();
    const productData = state?.product;
    const [selectedImage, setSelectedImage] = useState(productData?.image);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const handleAddToCart = (total) => {
//  console.log(total)
        dispatch( addToCart({
          ...productData,
          quantity,
          total,
          selectedSize
        }));
      };
      

    const sizes = productData?.short_desc.match(/\* (\w+) \(([^)]+)\)/g) || [];
    const parsedSizes = sizes.map(size => size.replace('* ', '').split(' ')[0]);
    const phoneNumber = productData?.short_desc.match(/☎(\d+)/)?.[1] || '01750221655';

    if (!productData) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto md:px-4 px-2 text-black py-12">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-6">
                    <figure className="aspect-square bg-base-200 rounded-2xl shadow-md overflow-hidden">
                        <img 
                            src={`https://admin.refabry.com/storage/product/${selectedImage}`}
                            alt={productData.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </figure>
                    
                    <div className="grid grid-cols-4 gap-3">
                        {productData.product_images.map((img) => (
                            <img
                                key={img.id}
                                src={`https://admin.refabry.com/storage/product/${img.name}`}
                                alt=""
                                className={`cursor-pointer rounded-xl border-2 aspect-square object-cover hover:opacity-80 transition ${
                                    selectedImage === img.name ? 'border-primary' : 'border-gray-300'
                                }`}
                                onClick={() => setSelectedImage(img.name)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-3">
                        <div className="badge badge-primary badge-lg px-4 py-2 rounded-full">{productData.category.name}</div>
                        <h1 className="md:text-4xl text-2xl font-bold leading-tight">{productData.name}</h1>
                        <div className="flex items-center gap-4">
                            <span className="md:text-3xl text-xl text-primary font-extrabold">৳{productData.price}</span>
                            {productData.is_discount <0 && (
                                <span className="text-lg line-through text-gray-400">
                                    ৳{parseInt(productData.price) + parseInt(productData.discount_amount)}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <FaTshirt className="text-primary" /> Select Size
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {parsedSizes.map((size) => (
                                <button
                                    key={size}
                                    className={`btn rounded-full ${
                                        selectedSize === size ? 'btn-primary' : 'btn-outline'
                                    } transition-all`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Product Features</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-600">
                            {productData.short_desc.split('||')[0].split('\r\n').map((line, index) => (
                                <li key={index} className="leading-relaxed">{line.trim()}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Stock */}
                    <div className="grid bg-white md:grid-cols-2 gap-6">
                        <div className="card  shadow-md hover:shadow-lg transition p-5 rounded-2xl">
                            <div className="space-y-3">
                                <h3 className="flex items-center gap-2 text-lg font-bold">
                                    <FaPhone className="text-primary" /> Contact
                                </h3>
                                <a href={`tel:${phoneNumber}`} className="btn btn-outline w-full gap-2">
                                    <FaPhone /> {phoneNumber}
                                </a>
                                <a href={`https://wa.me/${phoneNumber}`} className="btn btn-success w-full gap-2">
                                    <FaWhatsapp /> WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="card shadow-md hover:shadow-lg transition p-5 rounded-2xl">
                            <div className="flex justify-between flex-col gap-7">
                                <h3 className="flex items-center gap-2 text-lg font-bold">
                                    <FaTruck className="text-primary" /> Delivery
                                </h3>
                                <p className="text-sm text-gray-600">Nationwide shipping available</p>
                                <div className={`badge border-none px-4 py-2 ${
                                    productData.stock > 0 ? 'bg-pink-500' : 'badge-error'
                                }`}>
                                    {productData.stock > 0 ? `${productData.stock} in stock` : 'Out of stock'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="space-y-6">
    {/* Quantity Selector */}
    <div className="flex items-center  border-black border-2 font- rounded-3xl md:w-52 justify-center py-2  gap-4">
        <button 
            className="w-10 h-8 flex items-center justify-center text-2xl  rounded-full hover:bg-primary hover:text-white transition"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
            -
        </button>
        <div className="min-w-[60px] text-center font-bold text-x py-2 rounded-md bg-white">
            {quantity}
        </div>
        <button 
            className="w-10 h-8 flex items-center justify-center text-2xl  rounded-full hover:bg-primary hover:text-white transition"
            onClick={() => setQuantity(quantity + 1)}
        >
            +
        </button>
    </div>

    {/* Add to Cart Button */}
    <button onClick={()=>handleAddToCart(productData.price*quantity)} className="btn bg-black md:w-52 w-full border-none text-white text-lg  py-4 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
        Add to Cart - ৳{productData.price * quantity}
    </button>
</div>


{/* Detailed Specifications */}

                </div>
            </div>
            <div className="collapse mt-9 collapse-arrow bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <input type="checkbox" className="peer" /> 
    <div className="collapse-title text-xl font-semibold text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Product Specifications
    </div>
    <div className="collapse-content px-0"> 
        <div className="overflow-x-auto rounded-lg">
            <table className="table w-full">
                <tbody>
                    {productData?.short_desc?.split('||')[1]?.split('\r\n').map((line, index) => {
                        const [key, ...valueParts] = line.split(':');
                        const value = valueParts.join(':').trim();
                        
                        return (
                            <tr key={index} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                                <th className="bg-gray-50 text-gray-600 font-medium px-6 py-4 text-left w-1/3 border-r border-gray-100">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                        {key.trim()}
                                    </div>
                                </th>
                                <td className="px-6 py-4 text-gray-700">
                                    {value || <span className="text-gray-400">—</span>}
                                </td>
                            </tr>
                        )
                    })}
                    {/* Additional Info Row */}
                    <tr className="border-b border-gray-100 last:border-b-0">
                        <th className="bg-gray-50 text-gray-600 font-medium px-6 py-4 text-left border-r border-gray-100">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Store Address
                            </div>
                        </th>
                        <td className="px-6 py-4 text-gray-700">
                            {productData.short_desc.split('\r\n')
                                .find(line => line.startsWith('Visit us at:'))
                                ?.replace('Visit us at:', '')
                                .trim() || <span className="text-gray-400">—</span>}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        {/* Delivery Info */}

    </div>
</div>
        </div>
    );
};

export default Details;
