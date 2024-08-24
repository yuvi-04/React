import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {
  return (
    <div>
        <input type='search' placeholder='Search Products' />
        <nav>
            <Link to='featured'>featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </div>
  )
}
