import Home from "../Pages/Home/Home";
import Blog from  "../Pages/Blog/Blog"
import Contact from "../Pages/Contact/Contact" 
import Doctor from "../Pages/Doctor/Doctor"
import Introduce from "../Pages/Introduce/Introduce"
import Library from "../Pages/Library/Library"
import Hoidap from "../Pages/Q&A/Q&a"
export const  routes = [
    {path: '/' , Component: Home},
    {path: 'blog' , Component: Blog},
    {path: '/Contact' , Component: Contact},
    {path: '/Doctor' , Component: Doctor},
    {path: '/Introduce' , Component: Introduce},
    {path: '/Library' , Component: Library},
    {path: '/Q&A' , Component: Hoidap},

]