import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const PropertiesContext = createContext()

export const useProperties = () => useContext(PropertiesContext)

const ProperiesProvider = ({ children }) => {

    const [state, despatch] = useReducer(reducer, [])

    return (
        <PropertiesContext.Provider value={[state, despatch]}>
            {children}
        </PropertiesContext.Provider>
    )
}
export default ProperiesProvider