import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { RegisterPages } from '../03-forms/pages/RegisterPage';
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
                        <NavLink to='/formik-basic' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="formik-basic" element={<FormikBasicPage/>} />
                <Route path="users" element={<h1>Users</h1>} />
                <Route path="register" element={<RegisterPages/>} />
                <Route path="/*" element={ <Navigate to="/register" replace/> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
