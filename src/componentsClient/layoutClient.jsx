import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderClient from './headerClient';

function LayoutClient() {
    return (
        <div style={{ backgroundColor: "#FFFFFF" }} >
            <HeaderClient />
            <Outlet />
        </div>
    )
}

export default LayoutClient