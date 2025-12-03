import { createBrowserRouter } from "react-router";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Shop from "./Components/Pages/Shop/Shop";
import MeghaMenue from "./Components/Pages/MeghaMenue/MeghaMenue";
import Contact from "./Components/Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/about",
        element:<About></About>
    },
    {
        path: "/blog",
        element: <Blog></Blog>
    },
    {
        path: "/shop",
        element: <Shop></Shop>
    },
    {
        path: "/mega-menu",
        element: <MeghaMenue></MeghaMenue>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    }
]);
export default router;