import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default DetailsLayout;