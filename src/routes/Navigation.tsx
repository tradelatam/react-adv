import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import logo from '../logo.svg';

//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

export const Navigation = () => {
  return (
      <Suspense fallback={<span>Loading...</span>}>

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="logo de react" />

                    <ul>
                        {
                            routes.map(( ruta ) => {                            
                                return(
                                    <li key={ruta.to}>
                                        <NavLink 
                                            to={ruta.to} 
                                            className={ ({ isActive }) => isActive ? 'nav-active':'' }>
                                                {ruta.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }                   

                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(( ruta ) => {
                            //console.log(ruta);
                            return(
                                <Route 
                                    key={ruta.to} 
                                    path={ruta.path} 
                                    element={<ruta.Component/>} 
                                />
                            )
                        })

                    }                
                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace/> } />
                </Routes>
            </div>
        </BrowserRouter>
      </Suspense>
  )
}
