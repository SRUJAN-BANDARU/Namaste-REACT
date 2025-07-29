{/* <div id="parent">
    <div id="child">
        <h1>This is the first heading</h1>
        <h2>This is the second heading</h2>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children : [
            {
                path : "/", 
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            }
        ],
        errorElement : <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

