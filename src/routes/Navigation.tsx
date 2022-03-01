import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { RegisterPages } from '../03-forms/pages/RgisterPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="logo de react" />
                <ul>
                    <li>
                        <NavLink to='/register' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={ ({ isActive }) => isActive ? 'nav-active':'' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="about" element={<h1>About</h1>} />
                <Route path="users" element={<h1>Users</h1>} />
                <Route path="register" element={<RegisterPages/>} />
                <Route path="/*" element={ <Navigate to="/register" replace/> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
