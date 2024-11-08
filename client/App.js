import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Profile from "./src/components/Profile";
import Products from "./src/components/Products";
import Orders from "./src/components/Orders";
const App=()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>     
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
       children:[
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
        {
            path:"/product",
            element:<Products/>
        },
        {
            path:"/orders",
            element:<Orders/>
        },
       ]
    }
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

export default App;