import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './headerAdmin';

function LayoutAdmin() {
  return (
    <div style={{ backgroundColor: "#333" }}>
    <HeaderAdmin />
    <Outlet />
  </div>
  )
}

export default LayoutAdmin