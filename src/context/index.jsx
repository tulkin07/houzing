import { createContext } from "react";
import ProperiesProvider from "./Properties";



const RootContext = ({ children }) => {
    return (
        <>
            <ProperiesProvider>
                {children}
            </ProperiesProvider>
        </>
    )
}
export default RootContext