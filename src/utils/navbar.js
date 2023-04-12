import useId from "../hooks/useId"
import HomePage from '../pages/Home'
import PropertiesPage from '../pages/Properties'
export const navbar = [
    
    {
        id: useId,
        title:"Home",
        path:"/home",
        privite:false,
        hidden:false,
        element:<HomePage/>
    },
    {
        id: useId,
        title:"Properties",
        path:"/properties",
        privite:false,
        hidden:false,
        element:<PropertiesPage/>
    },
    {
        id: useId,
        title:"Sign in",
        path:"/signin",
        privite:false,
        hidden:true,
        element:<h1>Sign in</h1>
    }
    ,
    {
        id: useId,
        title:"Sign up",
        path:"/signup",
        privite:false,
        hidden:true,
        element:<h1>Sign up</h1>
    }
]