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
    }
]