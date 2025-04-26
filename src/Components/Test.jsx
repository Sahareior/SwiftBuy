import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CardShowcase = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://admin.refabry.com/api/all/product/get');
                if (response.data.status && response.data.data.data) {
                    setProducts(response.data.data.data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="text-center py-20"><span className="loading loading-ring loading-lg"></span></div>;
    if (error) return <div className="text-red-500 text-center py-20">Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    const hasDiscount = product.is_discount && new Date(product.discount_date) > new Date();
    const currentPrice = hasDiscount ? product.price - product.discount_amount : product.price;

    return (
        <div 
            to={`/product/${product.unique_id}`} 
            className="group relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={`https://admin.refabry.com/storage/product/${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                
                {/* Discount Badge */}
                {hasDiscount && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        Save {product.discount_amount}৳
                    </span>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 truncate">{product.short_desc.split('||')[0]}</p>
                
                {/* Price Section */}
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">{currentPrice}৳</span>
                    {hasDiscount && (
                        <span className="text-sm line-through text-gray-400">{product.price}৳</span>
                    )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm text-gray-500">
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                </div>
            </div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:bg-opacity-30 group-hover:opacity-100 transition-all duration-300">
                <button className="btn btn-primary rounded-full px-8 py-2 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default CardShowcase;