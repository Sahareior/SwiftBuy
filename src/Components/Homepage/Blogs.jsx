import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // 👈 Import blur effect

import Heading from '../Shared/Heading';

const blogPosts = [
  {
    id: 1,
    title: 'A Guide to Cultivating Inner Peace or Inner Harmony',
    date: 'Mar 30, 2025',
    tag: 'Mindfulness',
    image: 'https://foesta-demo.myshopify.com/cdn/shop/articles/blog1_510f2033-6572-4823-918c-534ec70baa8b_720x.png?v=1713870595',
  },
  {
    id: 2,
    title: 'A Guide to Cultivating Inner Peace or Inner Harmony',
    date: 'Mar 30, 2025',
    tag: 'Mindfulness',
    image: 'https://foesta-demo.myshopify.com/cdn/shop/articles/blog2_720x.png?v=1711855159',
  },
  {
    id: 3,
    title: 'A Guide to Cultivating Inner Peace or Inner Harmony',
    date: 'Mar 30, 2025',
    tag: 'Mindfulness',
    image: 'https://foesta-demo.myshopify.com/cdn/shop/articles/blog3_720x.png?v=1711855249',
  },
];

const BlogCard = ({ post }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    {/* Lazy Load Image */}
    <div className="relative overflow-hidden aspect-[4/3]">
      <LazyLoadImage 
        src={post.image} 
        alt={post.title}
        effect="blur"
        wrapperClassName="w-full h-full" // 👈 Important for container
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <FaCalendar className="text-amber-500" />
        <span>{post.date}</span>
      </div>
      <h4 className="text-xl font-bold text-gray-800 leading-snug transition-colors group-hover:text-amber-600">
        {post.title}
      </h4>
      <button className="btn btn-link p-0 text-gray-600 hover:text-amber-600 gap-2 transition-all">
        Read More
        <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
      </button>
    </div>

    {/* Hover Tag */}
    <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {post.tag}
    </span>
  </div>
);

const Blogs = () => {
  return (
    <div className="md:my-24 my-12">
      <Heading text="Our Blogs" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-16">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
