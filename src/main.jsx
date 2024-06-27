import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import {
    Home,
    People,
    Planets,
    PlanetInfo,
    Films,
    FilmInfo,
    Root,
    PersonInfo,
    ErrorPage
 } from './App'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Root><ErrorPage /></Root>,
        children: [
            { index: true, element: <People /> },
            { 
                path: "People", 
                element: <People />,
                children: [
                    {path: ":personInfo", element: <PersonInfo />}
                ]
            },
            { 
                path: "Planets", 
                element: <Planets />,
                children: [
                    {path: ":planetInfo", element: <PlanetInfo />}
                ]
            },
            { 
                path: "Films", 
                element: <Films />,
                children: [
                    {path: ":filmInfo", element: <FilmInfo />}
                ]
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
