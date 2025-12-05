// default import
import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import ContactUs from "./components/ContactUs";
// router configuration
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// for grocery
const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

  const [userName, setUserName] = useState()

  useEffect(()=>{
    // Make an api call and send username and password
    const data = {
      name: "munish dhillon"
    }
    setUserName(data.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      {/* this outlet will be filled with the children according to the path on what page we are */}
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    // if the path is this given "/" thm show element otherwise errorElement and react-router-dom take care of everything
    path: "/",
    element: <AppLayout />,
    // path: "/", root route pai children create kar diye
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path:"/grocery",
        element:(
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        // here resId is dynamic, change according to the id of restaurant
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
