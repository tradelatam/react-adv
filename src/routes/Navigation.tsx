import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

// import { FormikAbstractation } from '../03-forms/pages/FormikAbstraction';
// import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
// import { FormikComponents } from '../03-forms/pages/FormikComponents';
// import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
// import { RegisterPages } from '../03-forms/pages/RegisterPage';

import {RegisterFormikPage, FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPages, DynamicForm} from '../03-forms/pages'


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
                        <NavLink to='/formik-yup' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-components' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-abstractation' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Formik Abstractation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-register' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Formik Register</NavLink>
                    </li>                    
                    <li>
                        <NavLink to='/dynamic-form' className={ ({ isActive }) => isActive ? 'nav-active':'' }>Dynamic form</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="register" element={<RegisterPages/>} />
                <Route path="formik-basic" element={<FormikBasicPage/>} />
                <Route path="formik-yup" element={<FormikYupPage/>} />
                <Route path="formik-components" element={<FormikComponents/>} />
                <Route path="formik-abstractation" element={<FormikAbstractation/>} />
                <Route path="formik-register" element={<RegisterFormikPage/>} />
                <Route path="dynamic-form" element={<DynamicForm/>} />
                <Route path="/*" element={ <Navigate to="/register" replace/> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
